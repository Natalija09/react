import React from 'react';

export class Car extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="car">
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Brand
                            </th>
                            <th>
                                Model
                            </th>
                            <th>
                                Year
                            </th>
                            <th>City</th>

                            <th>Plate Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.vozila.map((car,i)=>{
                            return(
                                <tr key={i}>
                                    <td>
                                        {car.brand}
                                    </td>
                                    <td>
                                        {car.model}
                                    </td>
                                    <td>
                                        {car.year}
                                    </td>
                                    <td>
                                        {car.plates.grad}
                                    </td>
                                    <td>
                                        {car.plates.oznaka}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                

            </div>
        )
    }
}