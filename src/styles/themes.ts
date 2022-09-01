interface theme {
  name: string

  colors: {
    nav: string
    background: string
    text: string
    alt?: string
  }
}

const darkTheme: theme = {
  name: 'dark',
  colors: {
    nav: '#d8d8c0',
    background: '#f0f0d8',
    text: '#000000',
  },
}

export {darkTheme}
