import React, {useState} from 'react'
import {updateUser} from '../api-helper'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

function CreateNewPost (props){

    let id = props.match.params.user_id
    const [formValues, setFormValues] = useState({
        title: '',
        body: ''
    })
    const [created, createPost] = useState(false)


    const handleChange =(e)=> {
        let {name, value} = e.target
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(formValues)
        let res = await createPost(id, formValues)
        console.log(res)
        if(res.status === 200){
        props.history.push(`/users/${id}/posts`)
        }

    }


    return(
        <div>
        <h1>Create New Post</h1>
        <form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <p>Title:</p>
            <input name="title" className="post-title" placeholder="Title" value ={formValues.title}/>
            <p>Text:</p>
            <input name="body" className="post-body" placeholder="Body" value= {formValues.body}/>

            <button className="button">Send</button>


        </form>
        </div>
    )
}

export default CreateNewPost
