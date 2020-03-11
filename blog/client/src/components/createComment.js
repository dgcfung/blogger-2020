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

{/* <div className="create-form" >
<h2>Create a new comment</h2>
<form onSubmit={props.newTeacher}>
  <p>Comment:</p>
 
  <input
    type="text"
    name="name"
    value={props.createForm.name}
    onChange={props.handleFormChange} />
  <button>Submit</button>
</form>
</div > */}
