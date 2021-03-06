import React from 'react'
import axios from 'axios'

export class UserList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    getUsers = () =>{
        axios({
            url:"https://jsonplaceholder.typicode.com/users",
            method: "GET"
        })
        .then(res =>{
            this.setState({
                users: res.data
            })
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h2>User List</h2>
                <button type={"button"} onClick={() =>{this.getUsers()}}>Get users</button>
                <br/>
                {this.state.users.length > 0 ?
                <table border="10px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                :
                <h2>Users not loaded</h2>
                }
            </div>
        )
    }
}