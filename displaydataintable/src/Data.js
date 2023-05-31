import React from 'react'

function Data() {
    let 
    var rows = data.map(function(row){
        return  <tr>
           <td>{row.when}</td>
           <td>{row.who}</td>
           <td>{row.description}</td>
         </tr>
        })
       return <table>
       <thead>
         <th>When</th>
         <th>Who</th>
         <th>Description</th>
       </thead>
      {rows}
      </table>}
      
      
}

export default Data
