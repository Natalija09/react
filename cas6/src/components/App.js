import React from 'react';
import {Todos} from './Todos'

export class App extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    employee :{
      name: "Lina Kikiritkovska",
      email: "vraboten@gmail.com",

    },
    days:["monday", "tuesday", "wednesday"],
    todos:[
      {id:1, todo:"React course", done:false},
      {id: 2, todo: "eat dinner", done:false},
      {id:3, todo:"go to sleep", done:false}

    ],
    newTodo: ""

  }

}
updateempoyee = (employeeName, employeeEmail) =>{
  this.setState({
    employee:{
      ...this.state.employee,
      name: employeeName,
      email: employeeEmail
    }
   
  })


}
addDays = () =>{
  this.setState({
    days: ["sunday",...this.state.days,"thursday"]
  })

}
changeHandler = (event) =>{
  this.setState({
    [event.target.name]: event.target.value
  })
}

addTodo = (item) =>{
  if(item !== ""){
  var objekt = {
    id: this.state.todos.length +1,
    todo:item ,
    done: false,
  }
  this.setState({
    todos: [...this.state.todos, objekt],
    newTodo: ""
  })
}
else{
  alert("Empty field")
}
}
markToDoAsDone = (todo) =>{
  this.setState({
    todos: [
      ...this.state.todos.map(row=> (row.id === todo.id ? {id:row.id, todo:row.todo, done:!row.done} : row))
    ]
  })

}
 

render(){
    // console.log(this.state)
    console.log(this.state.newTodo)
    return(
      <div id="app">
        <input
        type = {"text"}
        placeholder = {"Add new todo"}
        value = {this.state.newTodo}
        name = {"newTodo"}
        onChange = {this.changeHandler}
        />
        <button type={"button"} onClick={()=>this.addTodo(this.state.newTodo)}>Add new</button>
        <Todos
        todoList ={this.state.todos}
        markToDoAsDone = {this.markToDoAsDone}/>
        {/* <h2>Vraboten: {this.state.employee.name}</h2>
        <h2>E-mail na vraboten: {this.state.employee.email}</h2>
       
        <button type={"button"}
        onClick={()=>{this.updateempoyee("Mina Bademovska", "vrabotena1@yahoo.com")}}
        >Update employee</button> 
        {this.state.days.map((day,i)=>{
          return(
          <li key={i}>
            {day}
          </li>)
        })}
        <button type={"button"} onClick={()=>{this.addDays()}}>Add days</button> */}
      </div>
    )
  }
}
