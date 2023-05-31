import React, { Component } from 'react'

export class Dropdowntask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
            key: [],
            key1:[]
        
        }
    }
  dropdown={

    "organization_1": ["Platform-1", "Platform-2", "Platform-3", "Platform-4"], 
   
    "organization_2": ["Platform-11", "Platform-21", "Platform-31", "Platform-41"], 
   
    "organization_3": ["Platform-12", "Platform-22", "Platform-32", "Platform-42"],
   
    "organization_4": ["Platform-13", "Platform-23", "Platform-33", "Platform-43"]
   
    }
    componentDidMount(){
    this.setState({key:Object.keys(this.dropdown)})
    for(let i of Object.values(this.dropdown)){
        this.setState({key1:[...this.state.key1],i})
    }
    }
render() {
    return (
        <div>
            <select >
                <option selected disabled hidden>---select option---</option>
                {this.state.key.map((a) => <option>{a}</option>)}
            </select><br/>
            <select >
                <option selected disabled hidden>---select option---</option>
                {this.state.key1.map((b) => <option>{b}</option>)}
            </select>
            <select >
                <option selected disabled hidden>---select option---</option>
                {this.state.key1.map((b) => <option>{b}</option>)}
            </select>
        </div>
    )
}
}

export default Dropdowntask
