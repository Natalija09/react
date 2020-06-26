import React from 'react';

export class Todos extends React.Component{
    render(){
        return(
            <ol>
                {this.props.todoList.map((todo,i)=>{
                    return(
                        <li key={i}>
                            <span>{todo.todo}</span>
                            <input
                            type = {"checkbox"}
                            checked = {todo.done}
                            value = {todo.done}
                            onChange = {()=>{this.props.markToDoAsDone(todo)}}
                            />
                        </li>
                    )
                })}
            </ol>
        )
    }
}