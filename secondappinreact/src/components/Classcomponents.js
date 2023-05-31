import React, { Component } from 'react'

export class Classcomponents extends Component {
    constructor(){
        super()
        this.state={
            count:100
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.count}times</p>
                <button onClick={()=>this.setState({count:this.state.count+50})}>increament</button>
                <button onClick={()=>this.setState({count:this.state.count-50})}>decreament</button>
                <button onClick={()=>this.setState({count:this.state.count*50})}>multiplication</button>
                <button onClick={()=>this.setState({count:this.state.count/50})}>division</button>
                
            </div>
        )
    }
}

export default Classcomponents
