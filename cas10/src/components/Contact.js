import React from 'react'

export class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disable : false
        }
    }

    enableDisable = () =>{
        this.setState({
            disable: !this.state.disable
        })
    }

    preventDef = (e) => {
      e.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.preventDef}>
                    <h3>First Name: <input 
                    type={"text"}
                    disabled = {this.state.disable}

                    /></h3>
                     <h3>Last Name: <input 
                    type={"text"}
                    disabled = {this.state.disable}

                    /></h3>
                     <h3>Adress: <input 
                    type={"text"}
                    disabled = {this.state.disable}

                    /></h3>
                    {this.state.disable ? <button onClick={this.enableDisable}>Enable</button> : <button onClick={this.enableDisable}>Disable</button>}
                </form>
        )
    }
}