import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentcomponent extends Component {
    render() {
        return (
            <div>
                <Childcomponent text="i am the first child of my parents"/>
                <Childcomponent text="i am the second child of my parents"/>
                <Childcomponent text="i am the third child of my parents"/>
            </div>
        )
    }
}

export default Parentcomponent
