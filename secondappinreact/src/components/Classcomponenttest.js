import React, { Component } from 'react'

export class Classcomponenttest extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Nakhshatra'
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={()=>this.setState({name:"tell me want you want"})}>hey</button>
                <button onClick={()=>this.setState({name:"I love You darling"})}>proposal</button>
            </div>
        )
    }
}

export default Classcomponenttest
