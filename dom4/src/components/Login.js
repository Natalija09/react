import React from 'react'
import {Input} from './Input';

export class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            inputField1: "",
            inputField2: "",
            inputType: "text"
        }
    }
    submitForm = (event) =>{
        event.preventDefault();
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    toggleTextArea = () =>{
        this.setState({
            inputType : this.state.inputType === "text" ? "textarea" : "text"
        })
    }



    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>

                    <Input
                    type={this.state.inputType}
                    placeholder={"Text 1"}
                    name={"inputField1"}
                    onChange={this.handleChange}
                    toggle = {this.toggleTextArea}
                    />
                    <br/>
                    <Input
                    type={this.state.inputType}
                    placeholder={"Text 2"}
                    name={"inputField2"}
                    onChange={this.handleChange}
                    toggle = {this.toggleTextArea}
                    />
                    
                   
                </form>
            </div>
        )
    }
}