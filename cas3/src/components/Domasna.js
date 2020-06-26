import React from 'react';

export class Domasna extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="domasna">
                {this.props.showKorisnik ? <h2>{this.props.korisnik1.ime}</h2> : <h2>{this.props.korisnik2.ime}</h2>}
                {this.props.showHeader && <h2>Domasna</h2>}
            </div>
        )
    }
}