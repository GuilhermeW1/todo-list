import * as React from 'react'
import {useAuth} from '../context/auth-provider'
import {off, onValue, ref} from 'firebase/database'
import {db} from '../services/firebase'

type NotesType = {
  author: {
    id: string
    name: string
    avatar?: string
  }
  title: string
  subject: string
  priority?: number
  complete?: boolean
}

type FirebaseNotesType = Record<string, NotesType>

type NotesTypeWithId = NotesType & {id: string}

const useNote = (dbQueryRef: string): NotesTypeWithId[] => {
  const {user} = useAuth()
  const [notes, setNotes] = React.useState<NotesTypeWithId[]>([])

  React.useEffect(() => {
    const noteRef = ref(db, dbQueryRef) //ex: ref(db, 'sections/section-1')

    onValue(noteRef, snapshot => {
      const notesDbValue = snapshot.val()
      const firebaseNotes: FirebaseNotesType = notesDbValue ?? {}

      const parsedNotes = Object.entries(firebaseNotes).map(([key, value]) => {
        return {
          id: key,
          author: value.author,
          title: value.title,
          subject: value.subject,
          priority: value.priority,
          complete: value.complete,
        }
      })

      setNotes(parsedNotes)
    })

    return () => {
      off(noteRef)
    }
  }, [dbQueryRef, user?.id])

  return notes
}

export {useNote}
export type {NotesType, NotesTypeWithId}
