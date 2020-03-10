import React from 'react'

function CreateNewPost (){
    return(
        <div>
        <h1>create post</h1>
        <form>
            <input className="post-title" placeholder="Title"/>
            <input className="post-body" placeholder="Body"/>
            <button className="button">Send</button>

        </form>
        </div>
    )
}

export default CreateNewPost
