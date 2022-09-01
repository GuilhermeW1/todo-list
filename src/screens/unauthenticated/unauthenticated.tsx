import * as React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from '../../context/auth-provider'
import {
  DivLoginSearch,
  DivLogin,
  DivContent,
  Div,
  DivLoginContainer,
} from './styles'

const Unauthenticated: React.FunctionComponent = () => {
  const {signInWithGoogle} = useAuth()

  async function signIn(): Promise<void> {
    await signInWithGoogle()
  }

  return (
    <Div>
      <DivContent>
        <h1>ToNotes</h1>
        <p>
          Crie novas notas <br /> divida-as por secoes{' '}
        </p>
      </DivContent>
      <DivLoginContainer>
        <DivLogin>
          <h2>Logue e comece a criar suas notas </h2>
          <button onClick={signIn}>Login com google {<FcGoogle />}</button>
        </DivLogin>
        <hr />
        <DivLoginSearch>
          <h3>Veja notas de outros usuarios digitando o id</h3>
          <label htmlFor="note-id">Codiogo da note</label>
          <input id="note-id" type="text" />
          <button>Pesquisar</button>
        </DivLoginSearch>
      </DivLoginContainer>
    </Div>
  )
}

//<a href='https://www.freepik.com/photos/list'>To do list photo created by freepik - www.freepik.com</a>

export default Unauthenticated
