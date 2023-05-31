import React, { Component } from 'react'

export class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"venkat",
             age:"24"
        }
    }
    
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                <input type="number" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
                
                <h1>{this.state.name},{this.state.age}</h1>
            </div>
        )
    }
}

export default Student
