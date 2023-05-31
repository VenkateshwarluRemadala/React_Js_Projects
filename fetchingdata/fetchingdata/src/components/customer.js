import React, { Component } from 'react'

export class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list1:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/customer").then((response)=>{response.json().then((result)=>{this.setState({list1:result})})})
    }
    render() {
        return (
            <div>
                {this.state.list1.map((customer)=><h1>customer id is {customer.id} and customer name is{customer.name} customer address is {customer.address} customer email is {customer.email}</h1>)}
            </div>
        )
    }
}

export default Customer
