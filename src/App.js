import React, {
  Component
} from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'

import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const navData = {
  left: [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Features',
      link: '/features'
    },
    {
      name: 'Pricing',
      link: '/pricing'
    },
    {
      name: 'Login',
      link: '/login'
    }
  ],
  right: [
    {
      name: 'Gumbo',
      link: '/gumbo'
    }
  ]
}


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <div>
            <Navigation left={navData.left} right={navData.right}/>
          </div>

          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/features" component={Features}/>
            <Route exact path="/pricing" component={Pricing}/>
          </div>

          </div>
        </Router>
      </div>
    )
  }
}

export default App
