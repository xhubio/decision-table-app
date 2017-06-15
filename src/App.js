import React, {
  Component
} from 'react'
import Navigation from './components/Navigation'

import Home from './pages/public/Home'
import Features from './pages/public/Features'
import Pricing from './pages/public/Pricing'

import {
  BrowserRouter as Router,
  Route,
  Link
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

        <Router>
          <div>

            <div>
              <Navigation left={navData.left} right={navData.right}/>
            </div>

            <div>
              <Route exact path="/" component={Home}/>
              <Route  path="/home" component={Home}/>
              <Route  path="/features" component={Features}/>
              <Route  path="/pricing" component={Pricing}/>
            </div>

          </div>
        </Router>

    )
  }
}

export default App
