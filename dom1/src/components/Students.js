import React from 'react';

export class Students extends React.Component{
    render(){
        console.log(this.props)

        return(
            <div>
             {this.props.vrednost1 && this.props.vrednost2 ? 
            document.write(
            this.props.studenti.map((students,i)=>{
                return ("<li key={i}>" + students.name + " " + students.surname + " " + students.email + "</li>")
            })
            ) : document.write("No students here")
            }
            </div>
        )
    }
}