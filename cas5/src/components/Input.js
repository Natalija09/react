import React from 'react';

export class Input extends React.Component{
    render(){
        return(
            <div>
                <p>
                   {this.props.textarea === "input" ?
                       <input
                   type={this.props.type}
                   placeholder={this.props.placeholder}
                   name={this.props.name}
                   onChange={this.props.onChange}
                   />
                   :
                   <textarea/>
                }
                   {
                       this.props.name === "password" ? 
                       <button type={"button"} onClick={this.props.toggle} className={"eye-button"}>
                           <i className={"fa " +(this.props.type ==="password" ? "fa-eye-slash" : "fa-eye")}></i>
                       </button>  
                       : null
                   }
                </p>
            </div>
        )
    }
}