import React from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {Users} from './Users'
import {UserList } from './UserList'
import {Navigation} from './Navigation'


export class App extends React.Component{
constructor(props){
  super(props)

  this.state ={
    users: []

  }
}

componentDidMount(){
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.log(json))
  axios({

    url:"https://jsonplaceholder.typicode.com/users",
    method: "GET"
  })
  .then(res =>{
    this.setState({
      users: res.data
    })
  })
  .catch(err =>{
    alert(err)
  })

}

  render(){
    
    
    return(
      <div id="app">
        <Navigation/>
        <Switch>
          <Route path="/users" render = {()=>{
            return <Users users={this.state.users}/>
          }}/>
          <Route path="/user-list" component={UserList}/>
        </Switch>
        
      </div>
    )
  }
}
