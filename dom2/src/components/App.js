import React from 'react';
import {Film} from './Film'

export class App extends React.Component{
  render(){
    var filmovi =[
      {
        title: "Blue Velvet",
        genre: "Neo-Noir Mystery, Psychological",
        year: 1986,
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51F-%2BbZmEML._AC_.jpg"

      },
      {
        title: "Lost Highway",
        genre: "Mistery, Thriller",
        year: 1997,
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/512xgQOeL7L._AC_.jpg"

      },
      {
        title: "Inland Empire",
        genre: "Drama, Mistery, Thriller",
        year: 2006, 
        imgUrl: "https://i.pinimg.com/originals/c6/57/41/c65741d470ac9dd15df772824c3a2ea8.jpg"

      }

    ]
    return(
      <div>
        <h2>App Filmovi</h2>
        <Film filmovi={filmovi}/>
      </div>
    )
  }
}