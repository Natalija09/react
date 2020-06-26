import React from 'react';
import "./Homework.css"


export class Homework extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            email:"",
            password:""

        }
    }
    nameChangeHandler = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    emailChangeHandler = (event) =>{
        this.setState({
            email: event.target.value
        })
    }
    passwordChangeHandler = (event) =>{
        this.setState({
            password:event.target.value
        })
    }
    render(){
        return(
            <div>
               <div className="inputForm">
                   <input
                   type="text"
                   name="name"
                   placeholder="Name"
                   value={this.state.name}
                   onChange={this.nameChangeHandler}
                   />
                   <br/>
                   <br/>
                   <input
                   type="email"
                   name="email"
                   placeholder="Email"
                   value={this.state.email}
                   onChange={this.emailChangeHandler}
                   />
                   <br/>
                   <br/>
                   <input
                   type="password"
                   name="password"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.passwordChangeHandler}
                   />
               </div>
               <div className="outputForm">
        <h4>Name: {this.state.name}</h4>
        <h4>Email: {this.state.email}</h4>
        <h4>Password : {this.state.password}</h4>
               </div>
            </div>
        )
    }
}