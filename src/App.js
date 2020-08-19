import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import navItems from './utils/navItems'
import Home from './Home'
import Footer from './components/Footer'
import AppStyle from './AppStyle'

const App = () => {
  return (
    <AppStyle>
      <BrowserRouter>
        <div className="page">
        <NavBar items={navItems} />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </AppStyle>
  )
}

export default App
