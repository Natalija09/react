import React from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"/posts"}>Posts</Link></li>
                    <li><Link to={"/post-list"}>Post List</Link></li>
                </ul>
            </div>
        )
    }
}