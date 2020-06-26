import React from 'react'
import {connect} from 'react-redux'
import {SayHello, SayPrezime, SayGodina, SayMilenik, SayType} from './../actions/SayHelloAction'

class Hello extends React.Component{

    componentDidMount(){
        this.props.sayHello();
        this.props.sayPrezime();
        this.props.saygodina();
        this.props.sayMilenik();
        this.props.sayType();
    }

    render(){
        return(
            <div>
                <h2>Ime i prezime:  {this.props.name} {this.props.prezime} </h2>
                <h2>Godina na ragjanje: {this.props.godinanaragjanje}</h2>
        <h2>Ime i rasa na milenik: {this.props.imenamilenik} {this.props.rasa}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        name: state.SayHelloReducer.name,
        prezime: state.SayHelloReducer.prezime,
        godinanaragjanje : state.SayHelloReducer.godinanaragjanje,
        imenamilenik : state.SayHelloReducer.imenamilenik,
        rasa: state.SayHelloReducer.rasa
    }

}

const mapDispatchToProps = (dispatch) => {
    return{

        sayHello: () => {
            dispatch(SayHello())
        
        },
        sayPrezime: () => {
            dispatch(SayPrezime())
        },
        saygodina: () => {
            dispatch(SayGodina())
        },
        sayMilenik: () => {
            dispatch(SayMilenik())
        },
        sayType: () => {
            dispatch(SayType())
        }

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)