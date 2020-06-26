import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Navigation} from './Navigation'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'

export class App extends React.Component{
  render(){
    return(
      <div>
        <h2>Cas 10</h2>
        <Navigation/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
  }
}
