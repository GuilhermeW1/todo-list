import * as React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Nav from '../../components/side-bar'
import styled from 'styled-components'
import Unauthenticated from '../unauthenticated/unauthenticated'
import Home from '../home'
import Section from '../section/index'

const Authenticated = () => {
  return <AppRoutes />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Unauthenticated />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Section />} />
      </Route>
    </Routes>
  )
}

const Layout: React.FunctionComponent = () => {
  return (
    <Div>
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </Div>
  )
}

const Main = styled.main`
  background: ${({theme}) => theme.darkTheme.colors.background};
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 1.5rem;
  height: 100vh;
  padding-top: 3rem;

  @media (min-width: 962px) {
  }
`

const Div = styled.div`
  @media (min-width: 961px) {
    display: flex;
    justify-content: space-between;
  }
`

export default Authenticated
