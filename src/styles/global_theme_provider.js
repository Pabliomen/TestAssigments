import React from 'react'
import { ThemeProvider } from 'styled-components'

import Colors from './theme/colors'

const Theme = {
    colors: Colors()
}

const GlobalThemeProvider = (props) => (
  <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
)

export default GlobalThemeProvider
