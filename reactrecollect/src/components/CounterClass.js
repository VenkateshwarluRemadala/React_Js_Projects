import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        super(props)
        this.setState = {name : 'venkat', empid : 21330}
    }
  render() {
    return (
      <div>
        <p>{this.setState.name}</p> 
        <p>{this.setState.empid}</p>
      </div>
    )
  }
}
