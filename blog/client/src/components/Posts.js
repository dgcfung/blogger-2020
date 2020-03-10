import React from 'react'

function Posts (props){
    console.log(props)
    
    return(
        <div className = "single-post">
            <h1>Posts</h1>
            <div className = "single-comment">
                <h1>comments</h1>
            </div>

        </div>
    )
}

export default Posts
