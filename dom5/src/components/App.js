import React from 'react';
import {Marketi} from './Marketi'

export class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    marketi:[
      {
        id:1,
        market: "Tinex"
        
      },
      {
        id: 2,
        market: "Vero"
        
      },
      {
        id:3,
        market: "Ramstore"
        
      }
    ]
  }
}

deleteMarket = (marketi) => {
  this.setState({
    ...this.state.marketi.splice(marketi.value, 1)
  })
}

  render(){
    return(
      <div>
        <h2>DOMASNA 5</h2>
        <Marketi 
        marketiList = {this.state.marketi}
        deleteMarket = {this.deleteMarket}
        />
      </div>
    )
  }
}
