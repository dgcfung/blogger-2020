import React from 'react'
import {Link} from 'react-router-dom'

function Profile (props){
    console.log(props)
return(
    <div>
        
        <h1>Profile</h1>
        {props.match.params.user_id}
        <p>Email:</p>
        <p>Age:</p>
        <p>Location:</p>
        <p>Gender:</p>
        <p>Interests:</p>
        <Link to="/profile/user_id/edit">Edit Profile Info</Link>
        
    </div>


)


}

export default Profile
