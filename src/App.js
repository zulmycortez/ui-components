import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import navItems from './utils/navItems'
import Home from './Home'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar items={navItems} />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
