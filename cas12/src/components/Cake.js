import React from 'react'
import {connect} from 'react-redux'
import {buyCake, refillCake} from '../actions/CakeActions'


class Cake extends React.Component{
    render(){
        return(
            <div>
                <h2>The number of cakes is: {this.props.cakes}</h2>
                <button disabled={this.props.cakes <= 0} onClick={()=>{
                    this.props.buyCake(1)
                }}>-1</button>
                <button disabled={this.props.cakes <= 1 } onClick={()=>{
                    this.props.buyCake(2)
                }}>-2</button>
                <button disabled={this.props.cakes <= 2} onClick={()=>{
                    this.props.buyCake(3)
                }}>-3</button>
                <br/>
                {this.props.error !== undefined || this.props.cakes === 0 ? 
                <div>
                <h2>{this.props.error}</h2> 
                <button onClick={()=>{this.props.refill()}}>Refill Cakes</button>
                </div>
                : null}
                 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        cakes: state.CakeReducer.cakes,
        error: state.CakeReducer.error
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (cake)=> {
            dispatch(buyCake(cake))
        },
        refill: () => {
            dispatch(refillCake())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cake);