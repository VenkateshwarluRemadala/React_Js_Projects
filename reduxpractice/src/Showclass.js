import React, { Component } from "react";
export class Student extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      course: "",
      students: [],
      updateObj1:{id:"", name:"", course:""},
      index:'' 
    };
  }
  createStudent = (e) => {
    e.preventDefault();
    // this.state.count = this.state.count+1;
    this.state.students.push({
      id: this.state.id,
      name: this.state.name,
      course: this.state.course,
    });
    this.setState([...this.state.students]);
    // this.state.id='';
    // this.state.name = '';
    // this.state.course = '';
    console.log(this.state.students);
  }
  
  updateObj(a,b){
    // console.log(a);
    // console.log(b);
  //  this.state.updateObj1.id = a.id;
  //  this.state.updateObj1.name = a.name;
  //  this.state.updateObj1.course = a.course;
  this.state.updateObj1 = {...this.state.updateObj1, ...a};
  //  this.setState({...this.state.updateObj1})
//  this.state.course = {...this.state.index, ...{b}}
  this.state.index = b;
  this.setState(this.state.updateObj1)
  this.setState(this.state.index);
}
  getValue(a,para){
    if(para == "id"){
      this.state.updateObj1 = { ...this.state.updateObj1, id:a.target.value}
      this.setState(this.state.updateObj1)
    }else if(para == "name"){
      this.state.updateObj1 = { ...this.state.updateObj1, name:a.target.value}
      this.setState(this.state.updateObj1)
    }else if(para == "course" ){
      this.state.updateObj1 = { ...this.state.updateObj1, course:a.target.value}
      this.setState(this.state.updateObj1)
    }
    // console.log(a.target.value);
    // console.log(this.state.updateObj1, "venkat");

  }
  updatearrayObj(){
    this.state.students.splice(this.state.index, 1, this.state.updateObj1)
    console.log(this.state.index, "venkat");
    console.log(this.state.updateObj1, "venkat");
    this.setState([...this.state.students])
  //  this.setState([...this.state.students])
    console.log(this.state.students, "venkay");
    
  
  }
//    this.state.count>1? "fdssf":null


  //   console.log();
//   console.log(this.state.students, "venkat");

  render() {
    return (
      <div className="container">
            {" "}
        <div className="card">
          {" "}
          <div className="card-header">
            <h1>Create Student</h1>{" "}
          </div>
          {" "}
          <div className="card-body">
            {" "}
            <form>
              {" "}
              <div className="mb-3">
                {" "}
                <label htmlFor="sid" className="form-label">
                  Student Id{" "}
                </label>
                    {" "}
                <input
                  type="text"
                  className="form-control"
                  id="sid"
                  onChange={(e) => this.setState({ id: e.target.value })}
                />
                {" "}
              </div>
              {" "}
              <div className="mb-3">
                {" "}
                <label htmlFor="sname" className="form-label">
                  Student Name{" "}
                </label>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="sname"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                {" "}
              </div>
              {" "}
              <div className="mb-3">
                {" "}
                <label htmlFor="course" className="form-label">
                  Student Course{" "}
                </label>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="course"
                  onChange={(e) => this.setState({ course: e.target.value })}
                />
                {" "}
              </div>
              {" "}
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  this.createStudent(e);
                }}
              >
                 Create{" "}
              </button>
                {" "}
            </form>
            {" "}
          </div>
           <hr />{" "}
          <div className="card">
            {" "}
            <div className="card-header">
              <h1>Student List</h1>{" "}
            </div>
            {" "}
            <div className="card-body">

              {" "}
              <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>phone</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                     this.state.students.map((ele, ind)=>
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.course}</td><button onClick={()=>{this.updateObj(ele,ind)}}>update</button>
                        </tr>)
                    }
                </tbody>
              </table>
              <h1>he;;</h1>
              <input type="text" value={this.state.updateObj1.id} onChange={(e)=>{this.getValue(e, "id")}}/> 
              {/* <input type="text" value={this.state.updateObj1.id} onChange={(e)=>this.setState({name1:e.target.value})}/>  */}
               <input type="text"  value={this.state.updateObj1.name} onChange={(e1)=>{this.getValue(e1, "name")}}/>
              <input type="text"  value={this.state.updateObj1.course} onChange={(e2)=>{this.getValue(e2, "course")}}/>
              <button onClick={()=>{this.updatearrayObj()}}>FinalUpdate</button>

              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
    );
  }
}
export default Student;
