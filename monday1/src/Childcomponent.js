import React, { Component } from 'react'

export class Childcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"venkat"
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.text}:{this.state.name}</h1>
            </div>
        )
    }
}

export default Childcomponent
