import React from 'react'
import {connect} from 'react-redux'
import {getPostsRequest} from './../actions/PostsActions'



class Posts extends React.Component{
    componentDidMount(){
        this.props.zemiPostovi()
    }
    render(){
        return(
            <div>
            {this.props.postovi.length > 0 ? <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.postovi.slice(0,10).map(post =>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>

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
        postovi: state.PostsReducer.posts
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        zemiPostovi : () =>{
            dispatch(getPostsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts);