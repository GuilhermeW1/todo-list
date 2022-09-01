import * as React from 'react'
import {useAuth} from '../context/auth-provider'
import {off, onValue, ref} from 'firebase/database'
import {db} from '../services/firebase'

type SectionType = {
  title: string
}

type FirebaseSectionType = Record<string, SectionType>

type SectionTypeWithId = SectionType & {id: string}

const useSections = (): SectionTypeWithId[] => {
  const {user} = useAuth()
  const [sections, setSections] = React.useState<SectionTypeWithId[]>([])

  React.useEffect(() => {
    const sectionRef = ref(db, 'sections/' + user?.id)
    onValue(sectionRef, snapshot => {
      const sectionsDbValues = snapshot.val()
      const firebaseSections: FirebaseSectionType = sectionsDbValues ?? {}

      const parsedSections = Object.entries(firebaseSections).map(
        ([key, value]) => {
          return {
            id: key,
            title: value.title,
          }
        },
      )

      setSections(parsedSections)
    })

    return () => {
      off(sectionRef)
    }
  }, [user?.id])

  return sections
}

export type {SectionTypeWithId}
export default useSections
