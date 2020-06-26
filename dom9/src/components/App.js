import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Navigation} from './Navigation'
import Posts from './Posts'

class App extends React.Component{
  render(){
    return(
      <div>
        <h2>Domasna 9</h2>
        <Navigation/>
        <Switch>
          <Route path='/posts' component = {Posts}/>
        </Switch>
      </div>
    )
  }
}




export default App;
