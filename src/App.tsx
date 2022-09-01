import * as React from 'react'
import {useAuth} from '../src/context/auth-provider'
import Unauthenticated from './screens/unauthenticated/unauthenticated'
import Authenticated from './screens/authenticated/authenticated'

function App() {
  const {user} = useAuth()
  return !user ? <Unauthenticated /> : <Authenticated />
}

export default App
