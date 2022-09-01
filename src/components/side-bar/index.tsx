import * as React from 'react'
import useSections from '../../hooks/useSections'
import SideBar from './side-bar'
import {Link} from 'react-router-dom'

const Nav: React.FunctionComponent = () => {
  const sections = useSections()

  return (
    <SideBar>
      <Link to={'/'}>Home</Link>
      {sections.map((item, index) => (
        <Link key={index} to={item.id}>
          {item.title}
        </Link>
      ))}
    </SideBar>
  )
}

export default Nav
