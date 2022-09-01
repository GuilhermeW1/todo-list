import * as React from 'react'
import {NotesTypeWithId} from '../../hooks/useNotes'
import {Aside} from './style'
const Note: React.FunctionComponent<{note: NotesTypeWithId}> = ({note}) => {
  //const [checked, setChecked] = React.useState<boolean>(note?.complete ?? false)
  //console.log(checked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
  }
  return (
    <Aside>
      <h5>{note.title}</h5>
      <input
        type="checkbox"
        checked={note.complete}
        onChange={handleChange}
        name="checkbox"
      />

      <p>{note.subject}</p>

      <pre>priority {note.priority}</pre>
    </Aside>
  )
}

export default Note
