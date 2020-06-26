import React from 'react';

export class Students extends React.Component{
    render(){

        console.log(this.props)
        return(
            <div id='students'>
                <h2>Student {this.props.students.ime} has indeks number: {this.props.students.brIndeks}</h2>
            </div>
        )
    }
}