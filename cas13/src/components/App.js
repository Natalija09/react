import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Navigation} from './Navigation'
import Users from './Users'
import {User} from './User'
import {UserHook} from './UserHook'

class App extends React.Component{
  render(){
    return(
      <div>
        <h2>Posleden cas :'(</h2>
        <Navigation/>
        <Switch>
          <Route path='/users' component={Users}/>
          <Route path='/user/:userId' component={User}/>
          <Route path='/user-hook/:userId' component={UserHook}/>
        </Switch>
      </div>
    )
  }
}

export default App;
