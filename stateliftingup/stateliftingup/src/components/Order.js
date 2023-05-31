import React from 'react'
import Address from './Address'
import DisplayProduct from './DisplayProduct'
import Summary from './Summary'

function Order() {
    const[address, setAddress]=React.useState("hydrebad")
    const[productname,setProductname]=React.useState("bananna")
    const[productquality,setProductquality]=React.useState("good")
    const[productquantity,setProductquantity]=React.useState("20kg")
    const[displayproduct, setDisplayproduct]=React.useState(["apple","samsung","lenovo","Nokia"])
    const [product1, setProduct1] = React.useState('')
    

    
    function checkdata(){
        console.log(address);
        console.log(productname);
        console.log(productquality);
        console.log(productquantity);
        console.log(displayproduct);
    
    }
    
const onProductChange=(value)=>{
setProduct1(value)
}

    return (
        <div>
            <h1>Welcome My Dear Customer</h1><hr/>
            <input type="text" value={address} onChange={(a)=>{setAddress(a.target.value)}} />
            <input type="text" value={productname} onChange={(a)=>{setProductname(a.target.value)}} />
            <input type="text" value={productquality} onChange={(a)=>{setProductquality(a.target.value)}} />
            <input type="text" value={productquantity} onChange={(a)=>{setProductquantity(a.target.value)}} />
            
            
           

            <button onClick={checkdata}>checkdat</button>
           <DisplayProduct onProductChange1={onProductChange} displayproduct1={displayproduct}/><hr/>
           <Summary  productname1={productname} product1={product1} productquality1={productquality} productquantity1={productquantity}/><hr/>
           <Address address1={address}/><hr/>
        </div>
    )
}

export default Order
