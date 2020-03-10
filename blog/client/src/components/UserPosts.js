import React from 'react'
import {Link} from 'react-router-dom'

function UserPosts(props){
    return(
        <div className= "Posts">
            <h1>User Posts</h1>
            <Link to="/createPost"></Link>
            {/* links */}
            {/* for each for all posts for each */}

        <div className= "Comments">
            <h1>Comments</h1>
        </div>
        </div>
    )
}

export default UserPosts