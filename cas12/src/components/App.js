import React from 'react';
import {Switch,Route} from 'react-router-dom'
import {Navigation } from './Navigation'
import Hello from './Hello'
import Cake from './Cake'
//import axios from 'axios'
import Comments from './Comments'
import {Comment} from './Comment'
 

class App extends React.Component{
  render(){
    return(
      <div id="app">

        <h2>Cas 12</h2>
        <Navigation/>

        <Switch>
          <Route path='/hello' component={Hello}/>
          <Route path='/cake' component = {Cake}/>
          <Route path='/comments' component={Comments}/>
          <Route path='/comment/:commentId' component={Comment}/>
        </Switch>
      
      </div>
    )
  }
}
export default App;
