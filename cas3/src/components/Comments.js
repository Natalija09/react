import React from 'react';
import PropTypes from 'prop-types'

export class Comments extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="comments">
               <ul>
                   {this.props.komentari.map((komentar,i)=>{
                       return(
                           <li key={i}>
                               <span>Author: {komentar.author}</span> <br/>
                               <span>Content: {komentar.content}</span> <br/>
                               <span>Date: {this.props.date}</span>
                           </li>
                       )
                   })}
               </ul>
            </div>
        )
    }
}

Comments.propTypes = {
    komentari: PropTypes.array.isRequired,
    date: PropTypes.string,
    number: PropTypes.number,
    isValid: PropTypes.bool,
    
}