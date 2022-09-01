import * as React from 'react'
import {useNote} from '../../hooks/useNotes'
import {useParams} from 'react-router-dom'
import AddNoteForm from '../../components/add-note'
import {useAuth} from '../../context/auth-provider'
import useSections, {SectionTypeWithId} from '../../hooks/useSections'
import Note from '../../components/note'

const Section: React.FunctionComponent = () => {
  const {user} = useAuth()
  const sectionId = useParams()
  const sections = useSections()

  const [currentSectionObj] = getCurrentSection(sections, sectionId.id)

  const dbRef = `sections/${user?.id}/${sectionId.id}/notes`

  const notes = useNote(dbRef)

  return (
    <div>
      <h1>{currentSectionObj?.title}</h1>
      <AddNoteForm user={user} dbRef={dbRef} />

      <div>
        {notes?.map(item => (
          <Note key={item.id} note={item} />
        ))}
      </div>
    </div>
  )
}

function getCurrentSection(
  sections: SectionTypeWithId[],
  id: string | undefined,
): SectionTypeWithId[] {
  const currentSection = sections?.filter(item => item.id === id)
  return currentSection
}

export default Section
