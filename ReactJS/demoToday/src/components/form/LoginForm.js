import React, { Component } from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

class loginForm extends Component{
    constructor(){
        super()
 

        this.state = {
            email: '',
            password:''
        }
    }

     submitLogin(e){
         e.preventDefault();
         let payload = {
             email:this.state.email,
             password: this.state.password
         }
         this.loginUser(payload)
     }

     loginUser(payload){
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(res => {
              return res.json()
            })
            .then(d => {
                this.props.authFunc(d)
            })
     }

    render(){

        let validPassword = this.state.password !=='';
        let validEmail = this.state.email !== '';
        let validateObj = validationFunc(
            this.state.email,
            this.state.email,
            'K',
            this.state.password,
            this.state.password
        );
        
        return (
            <form onSubmit={this.submitLogin.bind(this)}>
            <fieldset className='App'>
              <div style={{ display: 'inline-grid' }}>
                <h2>Log in</h2>
                <Input
                  type='text'
                  data='email'
                  name='Email'
                  func={e => {
                    this.setState({ email: e.target.value })
                  }}
                  valid={validateObj.validMail}
                />
      
                <Input
                  type='password'
                  data='password'
                  name='Password'
                  func={e => {
                    this.setState({ password: e.target.value })
                  }}
                  valid={validateObj.validPassword}
                />
               
                <input
                  style={({ "display": (validPassword && validEmail) === true ? '' : 'none' })}
                  type='submit'
                  value='Create My Account'
                />
              </div>
            </fieldset>
            </form>
          )
    }
}

export default loginForm