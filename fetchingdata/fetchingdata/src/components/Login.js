import React, { Component } from 'react'
import { Route } from 'react-router'
import Navbar from './Navbar'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             password:""
        }
        this.login=this.login.bind(this)
    }
    login(){
        if(this.state.name=="venkatesh" && this.state.password=="venkatesh"){
            alert("welcome venkatesh")
            
        }
        else{
            alert("wrong credentials are given")
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter your name" onChange={(e)=>{this.setState({name:e.target.value})} } /><br/><br/>
                
                <input type="password" placeholder="enter your password"onChange={(e)=>{this.setState({password:e.target.value})} } /><br/><br/>
                <button className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login
