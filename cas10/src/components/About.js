import React from 'react'

export class About extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            studentid: "",
            city: "",
            dob: "",
            gpa: ""


        }
    }
changeHandler = (event) =>{
       this.setState({
           [event.target.name] : event.target.value
       })
   }
   submitChange = () => {
       alert(
           " Student ID: " + this.state.studentid + "\n" +
           " City: " + this.state.city + "\n" +
           " DoB: " + this.state.dob + "\n" +
           " G.P.A: " + this.state.gpa 

       )
   }
    render(){
        return(
            <form>
                    <h3>Student ID: <input 
                    type={"text"}
                    name={"studentid"}
                    placeholder={"StudentID"}
                    //value = {}
                    onChange = {this.changeHandler}

                    /></h3>
                     <h3>City: <input 
                    type={"text"}
                    name={"city"}
                    placeholder={"City"}
                   // value = {}
                    onChange = {this.changeHandler}

                    /></h3>
                     <h3>DoB: <input 
                    type={"text"}
                    name={"dob"}
                    placeholder={"DoB"}
                   // value = {}
                    onChange = {this.changeHandler}

                    /></h3>

                    <h3>G.P.A: <input 
                    type={"text"}
                    name={"gpa"}
                    placeholder={"G.P.A"}
                   // value = {}
                    onChange = {this.changeHandler}

                    /></h3>
                    <button onClick={this.submitChange} name="button" type="submit">Alert</button>
                </form>
        )
    }
}