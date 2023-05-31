import React,{useState} from 'react'

function Course() {
    const[course, setCourse]=React.useState("Reactjs")
    return (
        <div>
            <h1>{course}</h1>
            <button onClick={()=>{setCourse("python")} }>clickHere</button><br/>
            <h1>{course}</h1>
            <input type="text" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
            
        </div>
    )
}

export default Course
