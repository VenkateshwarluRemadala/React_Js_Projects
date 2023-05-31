import React from 'react'
import { useState } from 'react'

function Childtoparent(props) {
    const [name, setname] = useState("manoj")
  return (
    <div>
      <p>{props.sendData}</p>
      <h1>hello</h1>
    </div>
  )
}

export default Childtoparent
