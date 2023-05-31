import React from 'react'

export class Child extends React.Component{
  render() {
    return (
      <div>
        <button onClick = { ()=>{this.props.handleClick(10)}}>Click</button>
      </div>
    )
  }
}

export default Child
