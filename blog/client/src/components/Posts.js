import React from 'react'
import {Link} from 'react'

function Posts (props){
    console.log(props)
    
    return(
        <div className = "single-post">
            <h1>Posts</h1>
            <Link to= "/posts/create/:user_id"></Link>
            <div className = "single-comment">
                <h1>comments</h1>
            </div>

        </div>
    )
}

export default Posts
