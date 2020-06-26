import React from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {Gallery} from './Gallery'
import {Navigation} from './Navigation'
import {API_URL} from './../constants'


export class App extends React.Component{
  constructor(props){
    super(props)

    this.state  = {
      photos: [], 
      selectedPhoto: ""
    }
  }
  componentDidMount(){
    axios({
      //url: API_URL + "/photos",
      url: `${API_URL}/photos`,
      method: "GET"
    })
    .then(res =>{
      this.setState({
        photos: res.data
      })
    })
    .catch(err =>{
      alert(err)
    })
  }
  openPhoto =(photo) =>{
    this.setState({
      selectedPhoto: photo.url
    })
  }
  closedPhoto = () =>{
    this.setState({
      selectedPhoto: ""
    })
  }

  render(){
    console.log(this.state.selectedPhoto)
    return(
      <div>
        <h1>Cas 9</h1>

        <Navigation/>
        <Switch>
          <Route path='/gallery' render={()=>{
            return(
              <Gallery
              listOfphotos = {this.state.photos}
              openPhoto = {this.openPhoto}
              selectedPhoto = {this.state.selectedPhoto}
              closedPhoto = {this.closedPhoto}
              />
            )
          }} />
        </Switch>
      </div>
    )
  }
}