import styled from 'styled-components'
import medias from '../../styles/media-queries'

type SideBarNavType = {
  open: boolean
  children: React.ReactNode
}

type BurgerType = {
  onClick: () => void
  open: boolean
}

const SideBarNav = styled.div<SideBarNavType>`
  display: ${({open}) => (open ? 'flex' : 'none')};
  flex-direction: column;
  margin: 0;
  width: 40vw;
  height: 100vh;
  background: gray;
  padding: 1.5rem 0.5rem;

  div {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    img {
      border-radius: 50%;
      width: 3.3rem;
      height: 3.3rem;
      margin: 0.5rem 0.5rem 0.5rem 0;
    }

    span {
      display: block;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      word-wrap: break-word;
    }

    hr {
      width: 100%;
    }

    h3 {
      font-size: 14px;
      margin: 0.5rem 0;
    }

    button {
      padding: 0.3rem;
    }

    input {
      max-width: 100%;
    }
  }

  ${medias.smallAndMedium} {
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }

  ${medias.medium} {
    width: 40vw;

    div {
      span {
        font-size: 16px;
      }
      h3 {
        font-size: 18px;
      }
      input {
        padding: 0.2rem;
        margin: 0.5rem 0;
      }
    }
  }

  ${medias.large} {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 20vw;
  }
`

const StyledBurger = styled.div<BurgerType>`
  width: 1rem;
  height: 1rem;
  position: ${({open}) => (open ? 'absolute' : 'fixed')};
  top: 15px;
  ${({open}) => (open ? 'right: 20px' : 'left: 20px')};

  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  ${medias.medium} {
    width: 2rem;
    height: 2rem;
  }

  ${medias.large} {
    display: none;
  }

  div {
    width: 1rem;
    height: 0.25rem;
    background-color: ${({open}) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({open}) => (open ? 'translateX(-100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }

    ${medias.medium} {
      width: 2rem;
    }
  }
`

export {SideBarNav, StyledBurger}
