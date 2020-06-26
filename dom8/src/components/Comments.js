import React from 'react'
import { Commentsbody } from './Commentsbody'

export const Comments = (props) => {
    return(
        <div id="comments" style={{justifyContent:"center"}}>
            
                    <table border="5px">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody >
                            {props.tableOfcomments.slice(0,21).map(comment =>{
                              return(
                            <tr className="dataHolder" key={comment.id}>
                               <td>{comment.name}</td>
                               <td>{comment.email}</td>
                              <td style={{textAlign:"center"}}><button className="button"
                              onClick={()=>{props.displayBody(comment)}}
                              >Display Body</button></td>
                                 
                            </tr>
                        
                )
            })}
            </tbody>
            </table>
            {
                props.selectedBody !== "" ? <Commentsbody prikaziTekst = {props.selectedBody} skrijTekst ={props.closeBody}/>
                : null
            }
        </div>
    )
}