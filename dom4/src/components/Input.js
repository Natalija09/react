import React from 'react'

export class Input extends React.Component{
    render(){
        return(
            <div>
                
                <input
                type ={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange = {this.props.onChange}
                />
               <button onClick={this.props.toggle}>
                   Change
                </button>
            </div>
        )
    }
}