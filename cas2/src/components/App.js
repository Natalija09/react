import React from 'react';
import {Welcome} from './Welcome'
import {Comments} from './Comments'
import {Students} from './Students';
import {FruitList} from './FruitList'

export class App extends React.Component{
  render(){


var name = 'Natalija'

var fruits = ["bannana", "apple", "cherry"];

var students = {
  ime:'Nat',
  prezime: 'Petreska',
  brIndeks: '99999'
}

    return(
      <div id="app">
        <h2>Hello</h2>
        <Welcome 
        ime={name} 
        prezime={'Petreska'}
        age={12}
        
        
        />
        <Welcome 
        ime={'Pero'}
        prezime = {'Perovski'}
        age = {45}
        />

        <Comments hasComments={true}/>

        <Students
        students={students}/>


        <FruitList  ovosje={fruits}/>

      </div>
    )
  }

}
