import * as React from 'react'
import ThemeProvider from './theme-provider'
import {BrowserRouter} from 'react-router-dom'
import {AuthContextProvider} from './auth-provider'

const Providers: React.FunctionComponent<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default Providers
