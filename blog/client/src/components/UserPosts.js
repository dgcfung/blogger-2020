import React from 'react'
// import {BrowserRouter, Link} from 'react-router-dom'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link
  } from 'react-router-dom'
  


function UserPosts(props){
    console.log(props.match.params.user_id)
    let id = props.match.params.user_id
    const linkId = `/posts/${id}/create`

    function handleClick() {
        props.history.push(`/posts/${id}/create`);
      }
    return(
        <div className= "Posts">
            <h1>User Posts</h1>
            {/* <NavLink to=`/posts/${id}/create`>Create New Post</NavLink> */}

            <button type="button" onClick={handleClick}> Create New Post
    </button> 
           

        <div className= "Comments">
            <h1>Comments</h1>
        </div>
        </div>
    )
}

export default UserPosts