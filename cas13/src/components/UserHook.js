import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const UserHook = (props) => {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        getSingleUser()
    }, [])
    
    function getSingleUser() {
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${props.match.params.userId}`,
            method: "GET"
        })
            .then(res => {
                setUser(res.data)

            })

            .catch(err => {
                alert(err)
            })

    }
    return (
        <div>
            {user !== undefined &&
                <div>
                    <h2>Name: {user.name}</h2>
                    <h2>Username: {user.username}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
            }
        </div>
    )
}