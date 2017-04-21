import React, {
  Component
} from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'

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
        <div>
          <Navigation left={navData.left} right={navData.right}/>
        </div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> Welcome to React </h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default App
