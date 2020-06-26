import React from 'react';

export class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            imeNaMilenice: "",
            vozrast: 0,
            godini: ["година","години"],
            rasa: "", 
            bojaNaKrzno: "",
            bojaNaOci: "",
        
        }


    }
    imeNaMileniceChangeHandler = (event) =>{
        this.setState({
            imeNaMilenice: event.target.value
        })
    
    }
    vozrastChangeHandler = (event) =>{
        this.setState({
            vozrast: event.target.value
        })
    
    }
    rasaChangeHandler = (event) =>{
        this.setState({
            rasa: event.target.value
        })
    
    }
    bojaNaKrznoChangeHandler = (event) =>{
        this.setState({
            bojaNaKrzno: event.target.value
        })
    
    }
    bojaNaOciChangeHandler = (event) =>{
        this.setState({
            bojaNaOci: event.target.value
        })
    
    }

    getGodini = () => {
        if(this.state.vozrast === "0" || this.state.vozrast === "1" ){
            return this.state.godini[0]
        }else{
            return this.state.godini[1]
        }
    }
    render(){
        console.log(this.state)
        console.log(this.getGodini())
        return(
            <div>
                <h2>Мое Милениче</h2>
                <table>
                    <tbody>
                    <tr>
                    <td>
                         <input
                type={"text"}
                name={"imeNaMilenice"}
                placeholder={"Име на милениче"}
                value = {this.state.imeNaMilenice}
                onChange = {this.imeNaMileniceChangeHandler}
                
                
                />
                <br/>
                <br/>
                
                <input
                onChange = {this.getGodini, this.vozrastChangeHandler}
                type={"number"}
                min={1}
                name={"vozrast"}
                placeholder={"Возраст"}
                value = {this.state.vozrast}
                
                
                />
                <br/>
                <br/>
                
                
                
                <input
                type={"text"}
                name={"rasa"}
                placeholder={"Раса"}
                value = {this.state.rasa}
                onChange = {this.rasaChangeHandler}
                
                />
                <br/>
                <br/>
                
                
                
                <input
                type={"text"}
                name={"bojaNaKrzno"}
                placeholder={"Боја на крзно"}
                value = {this.state.bojaNaKrzno}
                onChange = {this.bojaNaKrznoChangeHandler}
                
                />
                <br/>
                <br/>
                
                
                
                <input
                type={"text"}
                name={"bojaNaOci"}
                placeholder={"Боја на очи"}
                value = {this.state.bojaNaOci}
                onChange = {this.bojaNaOciChangeHandler}
                
                />
                
                
                    </td>
                    
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    
                    <td>
                        <h3>Името на миленичето е: {this.state.imeNaMilenice} </h3>
                        <h3>Возраста на миленичето е : {this.state.vozrast +" "+ this.getGodini()}</h3>
                        <h3>Расата на миленичето е: {this.state.rasa} </h3>
                        <h3>Бојата на крзното на миленичето е: {this.state.bojaNaKrzno} </h3>
                        <h3>Бојата на очите на миленичето се: {this.state.bojaNaOci} </h3>
                    </td>
                </tr>
                
                </tbody>
                </table>
               
                
                
                
            </div>
        )
    }
}
                
                
                
         