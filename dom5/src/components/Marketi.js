import React from 'react'

export class Marketi extends React.Component{
    render(){
        return(
            <ol>
                {this.props.marketiList.map((marketi,i)=>{
                    return(
                        <li key={i}>
                            <span>{marketi.market}</span>
                            <br/>
                            <button onClick={()=>{this.props.deleteMarket(marketi)}}>
                                Delete Market
                            </button>

                            
                        </li>
                    )
                })}
            </ol>
        )
    }
}