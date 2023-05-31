import React, { Component } from 'react'

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
        
    }
    componentDidMount(){
        fetch("http://localhost:3000/login").then((response)=>{response.json().then((result)=>{this.setState({list:result})})})
    }
    
    render() {
        return (
            <div>
                <h1>Product List</h1>
                   
                    {this.state.list.map((person)=><h1> my id is {person.id} my name is {person.name} my password is {person.password}</h1>)}

                       
            </div>
        )
    }
}

export default ProductList
