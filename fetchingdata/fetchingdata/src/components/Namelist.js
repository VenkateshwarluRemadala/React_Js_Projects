import React from 'react'

function Namelist() {
    const names = ["venkat","kalyan","vinay"]
    const persons=[
        {
            id:1,
            name:"venkat",
            age:16,
            skill:"everything"
        },
        {
            id:2,
            name:"vinay",
            age:40,
            skill:"emradu"
        },
        {
            id:3,
            name:"kalyan",
            age:30,
            skill:"sagam sagam"
        }
    ]
    // const personlist=persons.map(person=> <Person key={person.id} person={person}/>)
    const namelist=names.map((name,index)=> <tr key={index} ><td>{index}</td> <td>{name}</td></tr>)
    return (
        <div>
            <table border="2" align="center">
                <tr>
                    <th>serial no</th>
                    <th>serial no</th>
                    
                </tr>
                {namelist}
                </table>
           
        </div>
    )
}

export default Namelist
