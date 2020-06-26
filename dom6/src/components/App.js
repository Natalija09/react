import React from 'react';
import {Klasicizam} from './Klasicizam'
import {Renesansa} from './Renesansa'
import {Romantizam} from './Romantizam'
import {Navigation} from './Navigation'
import {Switch, Route} from 'react-router-dom'

export class App extends React.Component{
  render(){
    return(
      <div>
        <Navigation/>
        <Switch>

          <Route path="/klasicizam" component={Klasicizam}/>
          <Route path="/renesansa" component={Renesansa}/>
          <Route path="/romantizam" component={Romantizam}/>

        </Switch>
      </div>
    )
  }
}
