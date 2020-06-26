import React from 'react'

export const Posts = (props) => {
    return(
        <div>
            {
            props.posts.length > 0 ?
            <ul>
            {props.posts.map(post=>{
                        return(
                        <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                        )
                    })}

    
            </ul>
            :
            <h2>Loading posts...</h2>
            }
        </div>
    )
}