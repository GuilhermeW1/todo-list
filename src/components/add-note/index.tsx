import * as React from 'react'
import {User} from '../../context/auth-provider'
import {NotesType} from '../../hooks/useNotes'
import {push, ref} from 'firebase/database'
import {db} from '../../services/firebase'

const AddNoteForm: React.FunctionComponent<{
  user: User | undefined
  dbRef: string
}> = ({user, dbRef}) => {
  const title = React.useRef<HTMLInputElement>(null)
  const subject = React.useRef<HTMLInputElement>(null)

  async function handleAddNote(event: React.FormEvent) {
    event.preventDefault()
    console.log(title.current?.value)

    if (
      typeof title.current?.value !== 'string' ||
      title.current?.value === null ||
      title.current?.value === ''
    ) {
      return
    }
    if (
      typeof subject.current?.value !== 'string' ||
      subject.current?.value === null ||
      title.current?.value === ''
    ) {
      return
    }

    if (user === undefined) {
      throw new Error('user have to be logged in')
    }

    const newNote: NotesType = {
      author: user,
      title: title.current?.value,
      subject: subject.current?.value,
      complete: false,
      priority: 0,
    }

    const noteRef = ref(db, dbRef)
    await push(noteRef, newNote)

    title.current.value = ''
    subject.current.value = ''
  }

  return (
    <form onSubmit={handleAddNote}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={title} />

      <label htmlFor="subject">subject</label>
      <input type="text" id="subject" ref={subject} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default AddNoteForm
