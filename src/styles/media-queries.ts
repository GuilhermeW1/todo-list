type mediasType = {
  small: string
  medium: string
  large: string
  smallAndMedium: string
}

const medias: mediasType = {
  small: '@media(max-width: 480px)',
  medium: '@media(min-width: 481px) and (max-width: 960px)',
  large: '@media(min-width: 961px)',
  smallAndMedium: '@media(max-width: 960px)',
}

export default medias
