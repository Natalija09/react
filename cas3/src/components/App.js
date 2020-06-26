import React from 'react';
import {Domasna} from './Domasna'
import {Comments} from './Comments'
import {Car} from './Car'

 


export class App extends React.Component{
  render(){

    var registracija = {
      grad: "Skopje",
      oznaka: "SK-9999-AB"
    }

    var cars = [
      {brand: "Ford",
      model: "Focus",
      year: 2000,
    plates: registracija},

    {brand: "Ford",
      model: "Mondeo",
      year: 2001,
    plates: registracija},

    {brand: "Ford",
      model: "Ka",
      year: 2008,
    plates: registracija},

    ];



    var comments = [
      {
        author:"Filip",
        content: "This is a comment"
      }, 
      {
        author: "Pero",
        content: "This is a second comment"
      },
      {
        author: "Stefan",
        content: "This is a third comment"
      }
    ]

    var user1 = {
      ime: "Pero",
      prezime: "Perovski",
      age: 39
    }

    var user2 = {
      ime: "Vera",
      prezime: "Verovska",
      age: 35

    }

    return(
      <div id="app">
        {/* <Domasna 
        korisnik1={user1} 
        korisnik2={user2}
        showKorisnik = {false}
        showHeader = {true}
        /> */}
        <Comments komentari={comments}
        date={"11-02-2020"}
        number = {5}
        isValid = {true}
        />
        <Car vozila = {cars}/>

      </div>
    )
  }
}   



