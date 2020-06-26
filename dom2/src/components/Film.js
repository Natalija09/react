import React from 'react';
import PropTypes from 'prop-types';

export class Film extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="filmovi">
                   <ul>
                   {this.props.filmovi.map((film,i)=>{
                       return(
                           <li key={i}>
                               <span>Title: {film.title}</span> <br/>
                               <span>Genre: {film.genre}</span> <br/>
                               <span>Year: {film.year}</span> <br/>
                               <img height="300px" src={film.imgUrl}></img>
                           </li>
                       )
                   })}
               </ul>

            </div>
        )
    }
}
Film.propTypes = {
    filmovi: PropTypes.array.isRequired,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    imgUrl: PropTypes.string

}