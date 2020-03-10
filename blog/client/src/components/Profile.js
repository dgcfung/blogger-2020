import React from 'react'

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
        
    </div>


)


}

export default Profile
