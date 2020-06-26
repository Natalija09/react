import React from 'react';

export class FruitList extends React.Component{
    render(){

        console.log(this.props)
        
        return(
            <div id="fruitlist">
                {this.props.ovosje.map((fruit,i)=>{
                    return(
                    <li key={i} >{fruit}</li>
                    )
                })}

            </div>
        )
    }
}