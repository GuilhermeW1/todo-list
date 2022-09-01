import styled from 'styled-components'
import medias from '../../styles/media-queries'
const Aside = styled.aside`
  border: 1px solid gray;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  align-items: flex-start;
  word-break: break-word;
  width: 100%;

  ${medias.large} {
    max-width: 57rem;
  }

  h5 {
    align-self: center;
  }

  input {
    position: absolute;
    top: 1rem;
    right: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
  }

  pre {
    align-self: flex-end;
  }
`

export {Aside}
