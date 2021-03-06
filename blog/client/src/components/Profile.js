import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {readUser, destroyUser } from '../api-helper'

function Profile (props){
    // console.log(props)
    let id = props.match.params.user_id

    const [user, setUser] = useState({})


    useEffect(()=> {
        getUser()
    },[])

    const getUser = async()=>{
        let user = await readUser(id)
        setUser(user)
    }

    // const destroyUser= async(id)=>{
    //     const resp= await api.delete(`/users/${id}`)
    //     return resp.data
    // }
    // console.log(id)
return(
    <div>
        
        <h1>Profile</h1>
        {id}
    <p>Email: {user.email}</p>
    <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
        <p>Gender: {user.gender}</p>
        <p>Interests: {user.interests}</p>
        <Link to={`/profile/${id}/edit`}>Edit Profile Info</Link>
        <Link to={`/posts/${id}`}>My Posts</Link>

        <button onClick={destroyUser(id)}>Delete Account</button>
        

        
    </div>


)


}

export default Profile
