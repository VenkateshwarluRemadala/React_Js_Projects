import React from 'react'

function Summary(props) {
    return (
        <div>
            <p>Customer Summary</p>
            <p>Customer Product Name is:{props.productname1}</p>
            <p>Customer Product Quality is:{props.productquality1}</p>
            <p>Customer Product Quality is:{props.productquantity1}</p>
            <p>Product brand is {props.product1}</p>
        </div>
    )
}

export default Summary
