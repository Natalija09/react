import axios from 'axios'
import {GET_POSTS_SUCCESS, GET_POSTS_FAIL} from './../constants/PostsConstants'


export const getPostsSuccess = (posts) =>{
    return{
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}
export const getPostsFail = (error) =>{
    return{
        type: GET_POSTS_FAIL,
        payload: error
        
    }
}
export const getPostsRequest = () => {
    return dispatch => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        .then(res => {
            dispatch(getPostsSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getPostsFail(err))
        })
    }
}