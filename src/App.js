import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import navItems from './utils/navItems'
import Home from './pages/Home/Home'
import SwitchPage from './pages/SwitchPage/SwitchPage'
import Footer from './components/Footer'
import AppStyle from './AppStyle'
import BasicForm from './pages/BasicForm/BasicForm'
import CheckboxPage from './pages/CheckboxPage/CheckboxPage'

const App = () => {
  return (
    <AppStyle>
      <BrowserRouter>
        <div className="page">
        <NavBar items={navItems} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/basic-form" exact component={BasicForm} />
            <Route path="/switch" exact component={SwitchPage} />
            <Route path="/checkbox" exact component={CheckboxPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </AppStyle>
  )
}

export default App
