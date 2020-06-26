import React from 'react';
import {Students} from './Students';

export class App extends React.Component{
    render(){
        var students = [
            {
                name: "Lila",
                surname: "Kikiritkovska",
                email: "lilakikiritkovska@gmail.com"
            }, 
            {
                name: "Shila",
                surname: "Bademovska",
                email: "shilabademovska@gmail.com"
            },
            {
                name: "Mila",
                surname: "Fstakova",
                email: "milafstakova@gmail.com"
            }
        ]

        var vrednost1 = true;
        var vrednost2 = true; 






        return(
            <div>
                <Students
                vrednost1 = {vrednost1}
                vrednost2 = {vrednost2}
                studenti = {students}/>

            </div>
        )
    }
}
