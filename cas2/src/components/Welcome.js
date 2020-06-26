import React from 'react';


export class Welcome extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Welcome, {this.props.ime} {this.props.prezime}</h2>
                <h3>Age: {this.props.age}</h3>
            </div>
        )
    }
}

export default Welcome;