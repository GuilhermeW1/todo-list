import * as React from 'react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../services/firebase'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

const AuthContext = React.createContext({} as AuthContextType)
AuthContext.displayName = 'provedor de authenciacao '

function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = React.useState<User>()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const {displayName, photoURL, uid} = user

        if (!displayName || !photoURL) {
          throw new Error('Missing infromation from google acount.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const {displayName, photoURL, uid} = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing infromation from google acount.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  return (
    <AuthContext.Provider value={{user, signInWithGoogle}}>
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('Use auth have to be used with auth context provider')
  }
  return context
}

export {AuthContextProvider, useAuth}
export type {User}
