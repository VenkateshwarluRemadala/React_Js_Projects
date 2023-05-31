import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
            this.state={
                email:"venkat@gmail",
                password:''
            }
        

    }
    render() {
        return (
            <div>
                <input type="text" name="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                <input type="text" name="password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
                <p>{this.state.email}</p><br/>
                <p>{this.state.password}</p>
            </div>
        )
    }
}

export default Login
