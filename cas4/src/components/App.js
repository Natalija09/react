import React from 'react';

 

export class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "", 
            counter: 0
        
        }


    }
    componentDidMount(){
        console.log("This is from component did mount")
       
    }

   usernameChangeHandler = (event) =>{
       this.setState({
           username: event.target.value
       })
   
   }

   passwordChangeHandler = (event) =>{
       this.setState({
           password: event.target.value
       })
   }

   emailChangeHandler = (event) =>{
       this.setState({
           email:event.target.value
       })
   }
   imageClickCounter = () =>{
       this.setState({
           counter: this.state.counter +1
       })
   }

    


    render(){
        console.log(this.state)
        
      
        return(
            <div id="app">
                <h2>App</h2>
                <input
                type={"text"}
                name={"username"}
                placeholder={"Username"}
                value = {this.state.username}
                onChange = {this.usernameChangeHandler}
                
                />
                <br/>
                <br/>
                <input
                type= {"password"}
                name = {"password"}
                placeholder = {"Password"}
                value = {this.state.password}
                onChange = {this.passwordChangeHandler}
                
                
                
                />
                <br/>
                <br/>
                <input
                type= {"email"}
                name = {"email"}
                placeholder = {"Email"}
                value = {this.state.email}
                onChange = {this.emailChangeHandler}
                />
                
                
                
                <br/>
                <br/>
        <h2>This image is clicked: {this.state.counter} times</h2>
                <img 
                src={"https://images-na.ssl-images-amazon.com/images/I/51pCtX2StZL._AC_.jpg"} 
                alt={"slika"}
                onClick={this.imageClickCounter}
                />
                
            </div>
        )
    }
}