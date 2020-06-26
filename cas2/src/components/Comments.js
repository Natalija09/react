import React from 'react';


export class Comments extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="comments">
               {/* this.props.hasComments ? <h2>Comments</h2> : <h2>No comments here</h2>*/ } 
               {this.props.hasComments && <h2>Comments</h2>}






            </div>
        )
    }
}