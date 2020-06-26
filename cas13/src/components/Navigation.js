import React from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                </ul>
            </div>
        )
    }
}