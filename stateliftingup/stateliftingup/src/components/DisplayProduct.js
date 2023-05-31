import React from 'react'

function DisplayProduct(props) {
    return (
        <div>
            <select onChange={(f)=>{props.onProductChange1(f.target.value)}} >
            <option>---select---</option>
            {props.displayproduct1.map((a)=><option>{a}</option>)}
            </select>
            
            
        </div>
    )
}

export default DisplayProduct
