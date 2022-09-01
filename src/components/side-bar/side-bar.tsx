import * as React from 'react'
import {StyledBurger, SideBarNav} from './styles'
import styled from 'styled-components'
import {useAuth} from '../../context/auth-provider'
import {push, ref} from 'firebase/database'
import {db} from '../../services/firebase'
import {useNavigate} from 'react-router-dom'

const Div = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 961px) {
    position: relative;
  }
`

const SideBar: React.FunctionComponent<{children: React.ReactNode}> = ({
  children,
}) => {
  const {user} = useAuth()
  const [open, setOpen] = React.useState<boolean>(false)
  const [createSection, setCreateSection] = React.useState<string>('')

  const history = useNavigate()

  const handleToggleBurger = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  async function handleAddSection(event: React.FormEvent) {
    event.preventDefault()

    if (createSection.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('User have to be logged in to create a new section')
    }

    const sectionRef = ref(db, 'sections/' + user?.id)
    const firebaseSection = await push(sectionRef, {
      title: createSection,
      authorId: user?.id,
    })
    setCreateSection('')

    history(`/${firebaseSection.key}`)
  }

  return (
    <Div>
      <StyledBurger open={open} onClick={handleToggleBurger}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <SideBarNav open={open}>
        <div>
          <img
            src={user?.avatar}
            alt={user?.name}
            referrerPolicy="no-referrer"
          />

          <span>{user?.name ?? 'user-name'}</span>

          <hr style={{margin: '1rem 0'}} />
          <h3>Sections --</h3>
          <button type="submit" onClick={handleAddSection}>
            Add +
          </button>
          <input
            type="text"
            value={createSection}
            onChange={event => setCreateSection(event.target.value)}
          />
        </div>

        {children}
      </SideBarNav>
    </Div>
  )
}

export default SideBar
