import React from 'react'
import {connect} from 'react-redux';
import {fetchUsersRequest} from './../actions/UsersActions'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        return(
            <div>
                {this.props.users.length > 0 ? <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Redirect</th>
                            <th>Hook</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={`/user/${user.id}`}>To User</Link></td>
                                    <td><Link to={`/user-hook/${user.id}`}>Hook</Link></td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>

                </table> : <h2>Loading</h2>}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        users : state.UsersReducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUsers : () => {
            dispatch(fetchUsersRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Users);