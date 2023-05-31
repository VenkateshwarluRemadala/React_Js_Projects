import React from 'react'

function Dropdown2(props) {
    return (
        <div>
            <select >
                <option>
                    ---select option---
                    
                </option>
                {props.value.map((i)=><option>{i}</option>)}
            </select>
        </div>
    )
}

export default Dropdown2
