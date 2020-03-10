import React from 'react'

function CreateComment(){

  return(
    <form>
    <input className="post-title" placeholder="Title"/>
    <input className="post-body" placeholder="Body"/>
    <button className="button">Send</button>
    </form>
  )
}

export default CreateComment