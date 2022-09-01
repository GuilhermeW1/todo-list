import styled from 'styled-components'
import medias from '../../styles/media-queries'

const Div = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding: 4.5rem 0px 7rem;
  line-height: 1.3;
  margin: 0 2rem;

  hr {
    width: 100%;
  }

  ${medias.small} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding: 0.5rem;
    line-height: 2;

    hr {
      width: 80%;
    }
  }

  ${medias.medium} {
    margin: auto;
    padding: 1rem;
  }
`

const DivLoginContainer = styled.div`
  border: 1px solid gray;
  width: 25rem;
  padding: 2rem;
  height: 65vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  button {
    background: ${({theme}) => theme.darkTheme.colors.background};
    padding: 0.5rem;
    margin: 0.8rem;
    line-height: normal;
    border: none;
    font-size: 16px;
    align-self: center;
    cursor: pointer;
  }

  ${medias.small}{
    padding: 0;
    border: none;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;

    svg {
      font-size: 16px;
      line-height: normal;
    }
  }

}
${medias.medium} {
  padding: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    padding: 0.6rem;
  }
`

const DivContent = styled.div`
  width: 25rem;
  line-height: 1.5rem;

  h1 {
    font-weight: 900;
    font-size: 3rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  ${medias.small} {
    width: 15rem;
    margin-bottom: 2rem;

    h1 {
      font-weight: 700;
    }
  }

  ${medias.medium} {
    width: 15rem;
    h1 {
      font-weight: 700;
    }
    p {
      font-size: 1rem;
    }
  }
`

const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.75rem;
    weight: 600;
  }

  button {
    margin-top: 2rem;
    font-size: 16px;
    padding: 1rem;
  }

  ${medias.small} {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    h2 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  ${medias.medium} {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    h2 {
      font-weight: 700;
      font-size: 1.3rem;
    }
  }
`

const DivLoginSearch = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
  label {
    align-self: center;
    margin-bottom: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    padding: 0.5rem;
  }

  ${medias.small} {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    h3 {
      font-weight: 400;
      font-size: 0.9rem;
      margin: 1rem 0;
    }

    label {
      align-self: center;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      font-weight: 500;
    }
    input {
      padding: 0.4rem;
    }
  }

  ${medias.medium} {
    display: flex;
    flex-flow: column nowrap;

    h3 {
      margin: 1rem 0;
      font-size: 1rem;
    }

    label {
      align-self: center;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
    input {
      padding: 0.4rem;
    }
  }
`

export {DivLoginSearch, DivLogin, DivContent, Div, DivLoginContainer}
