import * as React from 'react'
import {useAuth} from '../context/auth-provider'
import {useNote} from '../hooks/useNotes'
import AddNoteForm from '../components/add-note'
import Note from '../components/note'

const Home: React.FunctionComponent = () => {
  const {user} = useAuth()
  const notes = useNote(`global-notes/${user?.id}`)
  const dbRef = `global-notes/${user?.id}`

  return (
    <div>
      <AddNoteForm user={user} dbRef={dbRef} />
      {notes.map(item => {
        return <Note key={item.id} note={item} />
      })}
    </div>
  )
}

export default Home
