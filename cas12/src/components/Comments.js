import React from 'react';
import {connect} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions'
import {Link} from 'react-router-dom'


class Comments extends React.Component{
    componentDidMount(){
        this.props.zemiKomentari()
    }

    render(){
        return(
            <div>
                {this.props.komentari.length > 0 ? <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Redirect</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.komentari.slice(0,11).map(komentar=>{
                            return(
                                <tr key={komentar.id}>
                                    <td>{komentar.id}</td>
                                    <td>{komentar.name}</td>
                                    <td>{komentar.email}</td>
                                    <td><Link to={'/comment/' +komentar.id}>To Comment</Link></td>

                                </tr>
                            )
                        })}
                    </tbody>

                </table> : <h2>Loading...</h2>}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        komentari: state.CommentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        zemiKomentari: ()=>{
            dispatch(fetchCommentsRequest())
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (Comments);