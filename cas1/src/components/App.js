import React from 'react';
import {Hello} from './Hello';
import {Petreska} from './Petreska'


export class App extends React.Component{
  render(){
    return(
      <div id="app">

        <h2>Hello</h2>
        <Hello/>
        <h3>Nat</h3>
        <Petreska/>
        
        
        </div>
    )
  }
}