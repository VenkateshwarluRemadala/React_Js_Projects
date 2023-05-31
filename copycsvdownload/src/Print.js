import React from 'react'

function Print() {
    const Print = () =>{     
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }
      
  return (
    <div>
        <div  id='printablediv'>
    Print me
</div>
        <button onClick={()=>{Print()}}>print div</button>
      
    </div>
  )
}

export default Print
