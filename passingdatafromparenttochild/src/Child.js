import React from 'react'

function Child(props) {
   
  return (
    <div >
      <table>{
                props.parentData.length? <thead> 
                                            <tr>
                                              <th>userId</th>
                                              <th>id</th>
                                              <th>title</th>
                                               <th>body</th>
                                            </tr>
                                         </thead> : null
        }
        {
            props.parentData.map((item)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    </tbody>
                )
            })
        }
      </table>
    </div>
  )
}

export default Child
