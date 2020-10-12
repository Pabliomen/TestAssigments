import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GlobalThemeProvider from './styles/global_theme_provider'

import Navigation from './components/navigation'
import TopGeschenken from './pages/top_geschenken/index'
import Welcome from './pages/welcome/index'

function App() {
  return (
    <GlobalThemeProvider>
      <Router>
        {/* <Navigation /> */}
        <Route exact path="/" component={Welcome} />
        <Route path="/topgeschenken" component={TopGeschenken} />
      </Router>
    </GlobalThemeProvider>
  )
}

export default App;
