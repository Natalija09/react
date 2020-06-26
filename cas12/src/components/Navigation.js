import React from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
    render(){
        return(
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/cake">Cake</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul>
        )
    }
}