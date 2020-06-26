import React from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom'
import {API_URL} from './../constants'
import {Navigation} from './Navigation'
import {Comments} from './Comments'

export class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      comments: [],
      selectedBody: ""
    }
  }
  componentDidMount(){
    axios({
      url:`${API_URL}/comments`,
      method: 'GET'
    })
    .then(res =>{
      this.setState({
        comments: res.data
      })
    })
    .catch(err =>{
      alert(err)
    })
  }
  displayBody = (comment) =>{
    this.setState({
      selectedBody : comment.body
    })
  }
  closeBody = () =>{
    this.setState({
      selectedBody: ""
    })
  }

  render(){
    return(
      <div>
        <h2>Domasna 8</h2>
        <Navigation/>
        <Switch>
          <Route path='/comments' render={()=>{
            return(
              <Comments
              tableOfcomments = {this.state.comments}
              displayBody = {this.displayBody}
              selectedBody = {this.state.selectedBody}
              closeBody = {this.closeBody}
              
              />

            )
          }}/>
        </Switch>
      </div>
    )
  }
}
