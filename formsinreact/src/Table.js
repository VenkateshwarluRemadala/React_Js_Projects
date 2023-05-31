import React, { useState } from 'react'

function Table(props) {
   
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {
               props && props.data && props.data.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.salary}</td>
                           
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
