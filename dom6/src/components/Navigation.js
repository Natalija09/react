import React from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
    render(){
        return(
            <div id="navigation">
                <ul>
                    <li>
                        <Link to={"/"}>&#127968;</Link>
                    </li>
                    <li>
                        <Link to={"/klasicizam"}>Klasicizam</Link>
                    </li>
                    <li>
                        <Link to={"/renesansa"}>Renesansa</Link>
                    </li>
                    <li>
                        <Link to={"/romantizam"}>Romantizam</Link>
                    </li>

                </ul>
            </div>
        )
    }
}