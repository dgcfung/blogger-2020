import React from 'react'

function EditProfile(props){
    console.log(props)
    return(
        <form>
        <h1>Edit Profile</h1>
        <p>email:</p>
      
        <input className="post-title" placeholder="Age"/>
        <input className="post-body" placeholder="Gender"/>
        <input className="post-title" placeholder="Location"/>
        <input className="post-body" placeholder="Interests"/>

        <button className="button">Send</button>

    </form>
       
      
    )
}

export default EditProfile