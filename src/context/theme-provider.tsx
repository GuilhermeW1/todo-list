import * as React from 'react'
import {ThemeProvider as ThemeProv} from 'styled-components'
import {darkTheme} from '../styles/themes'

const ThemeProvider: React.FunctionComponent<{children: React.ReactNode}> = ({
  children,
}) => {
  return <ThemeProv theme={{darkTheme}}>{children}</ThemeProv>
}

export default ThemeProvider
