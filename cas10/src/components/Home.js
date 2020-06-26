import React from 'react'

export class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {

            //brojki:[1,2,3,4,5,6], 

            day: "",
            month: "",
            year: "",
            
            dates:[
                {
                    id:0,
                    day:"12",
                    month:"March",
                    year: "1992"
                },
                {
                    id:1,
                    day:"13",
                    month:"May",
                    year: "1993"
                },
                {
                    id:2,
                    day:"14",
                    month:"June",
                    year: "1992"
                },
            ]
            

        }
    }
   changeHandler = (event) =>{
       this.setState({
           [event.target.name] : event.target.value
       })
   }
   addDate = (event) =>{
       event.preventDefault();
       this.setState({
           dates:[
               ...this.state.dates, {
                   id: this.state.dates.length +1,
                   day: this.state.day,
                   month: this.state.month,
                   year: this.state.year
               }
           ],
            day: "",
            month: "",
            year: ""
       })
   }
   deleteDate = (date) => {
       this.setState({
           dates: [...this.state.dates.filter(d => d.id !==date.id)]
       })
   }
      
//    deleteBrojki = () => {
//        this.setState({
//            brojki : [...this.state.brojki.filter(brojka => brojka>5)]

//        })
//    }

    render(){
        return(
            <div>
                <form onSubmit={this.addDate}>
                    <h3>Day: <input 
                    type={"text"}
                    name={"day"}
                    placeholder={"Day"}
                    value = {this.state.day}
                    onChange = {this.changeHandler}

                    /></h3>
                     <h3>Month: <input 
                    type={"text"}
                    name={"month"}
                    placeholder={"Month"}
                    value = {this.state.month}
                    onChange = {this.changeHandler}

                    /></h3>
                     <h3>Year: <input 
                    type={"text"}
                    name={"year"}
                    placeholder={"Year"}
                    value = {this.state.year}
                    onChange = {this.changeHandler}

                    /></h3>
                    <button name="button" type="submit">Add new</button>
                </form>
                <table border="2px">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dates.map(date=>{
                            return(
                                <tr key={date.id}>
                                    <td>{date.day}</td>
                            <td>{date.month}</td>
                            <td>{date.year}</td>
                            <td><button onClick={()=>{this.deleteDate(date)}}>Delete</button></td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
                {/* {this.state.brojki.map(e=>{
                    return(
                    <h2>{e}</h2>
                    )
                })}
                <button onClick={()=>{this.deleteBrojki()}}>Brojki</button> */}
            </div>
            
        )
    }
}