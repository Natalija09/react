import React from 'react';
import axios from 'axios'
import {Navigation} from './Navigation'
import {PostList} from './PostList'
import {Posts} from './Posts'
import { Switch, Route } from 'react-router-dom';


export class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    axios({
      url:"https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    })
    .then(res =>{
      this.setState({
        posts: res.data
      })
    })
    .catch(err =>{
      alert(err)
    })
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h2>Domasna 7</h2>
        <Navigation/>
        <Switch>
          <Route path ="/post-list" component = {PostList}/>
          <Route path = "/posts" render= {() =>{
            return <Posts posts={this.state.posts}/>
          }}/>
        </Switch>
      </div>
    )
  }
}
