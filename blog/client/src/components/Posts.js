import React from 'react'
import {Link} from 'react'

function Posts (props){
    console.log(props.match.params.user_id )
    let id = props.match.params.user_id
    return(
        <div className = "single-post">
            <h1>Posts</h1>
            {/* <Link to= "/"></Link> */}
            <div className = "single-comment">
                <h1>comments</h1>
            </div>

        </div>
    )
}

export default Posts
