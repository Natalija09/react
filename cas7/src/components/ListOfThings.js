import React from 'react'

export class ListOfThings extends React.Component{
    render(){
        return(
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                               ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>Year</th>

                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listOfThings.map((e,i)=>{
                            return(
                                <tr key={i}>
                                    <td>
                                        {e.id}
                                    </td>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.lastName}
                                    </td>
                                    <td>
                                        {e.year}
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