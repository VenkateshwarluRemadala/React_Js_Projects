import React from 'react'

function Main(props) {
    const[count, setCount]=React.useState(0)
    function Increament(){
        
         setCount(count+1)
        
    }
    function Decreament(){
       if (count>0===true){ 
       setCount(count-1)
       }
   }
    return (
        <div>
            <Counter Increament={Increament}
            Increament={Decreament}/>
        </div>
    )
}

export default Main
