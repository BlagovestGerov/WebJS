import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/LoginForm'

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      token: ''
    }
  }

  render () {
    return(
      <div>
      return <SingUpForm />
      <LoginForm />
    </div>

    )
  }
}

export default App
