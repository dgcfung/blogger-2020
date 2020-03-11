import React from 'react'

function CreateComment(props){

  return(
    <form onSubmit= {props.newComment}>
    <input className="post-title" placeholder="Title"/>
    <input className="post-body" placeholder="Body"/>
    <button className="button">Send</button>
    </form>
  )
}

export default CreateComment


