import React from 'react';
import {ListOfThings} from './ListOfThings'
import {Contact} from './Contact'
import {Info} from './Info'
import {Home} from './Home'
import {Switch, Route} from 'react-router-dom'
import {Navigation} from './Navigation'


export class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    listOfThings:
[
{id:1,name:"Pero",lastName:"Perovski",year:1996},
{id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
{id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
]
    }
  }


  handleChange=(event) =>{

    this.setState({
        [event.target.name]:event.target.value

    })
}
submitNewUser = (event) =>{
  
  var user = {
    id: this.state.listOfThings.length + 1,
    name: this.state.name,
    lastName: this.state.lastName,
    year: this.state.year
  }
  this.setState({
    listOfThings: [...this.state.listOfThings, user],
    name : "",
    lastName: "",
    year: ""
  })
}


  render(){
    return(
      <div id="app">
        <Navigation/>
        <Switch>

          <Route path="/home" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/contact" component={Contact}/>

        </Switch>




      
        <input
        type = {"text"}
        name= {"name"}
        placeholder = {"Name"}
        onChange = {this.handleChange}
        value = {this.state.name}
        />
        <br/>
        <br/>
        <input
        type = {"text"}
        name= {"lastName"}
        placeholder = {"Last name"}
        onChange = {this.handleChange}
        value = {this.state.lastName}
        />
        <br/>
        <br/>
        <input
        type = {"text"}
        name= {"year"}
        placeholder = {"Year"}
        onChange = {this.handleChange}
        value = {this.state.year}
        />
        <br/>
        <br/>
        <button onClick={this.submitNewUser}>Add new user</button>
        <ListOfThings listOfThings = {this.state.listOfThings}/>
        
      </div>
    )
  }
}