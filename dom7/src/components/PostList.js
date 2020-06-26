import React, { useReducer } from 'react'
import axios from 'axios'

export class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    getPosts = () =>{
        axios({
            url:"https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        })
        .then(res =>{
            this.setState({
                posts: res.data
            })
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2>Post List</h2>
                <button type={"button"} onClick={() =>{this.getPosts()}}>Get posts</button>
                {this.state.posts.length > 0 ?
                <ol>
                    {this.state.posts.map(post=>{
                        return(
                        <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                        )
                    })}
                </ol>
                : 
                <h2>Posts not loaded</h2>
                }

            </div>
        )
    }
}