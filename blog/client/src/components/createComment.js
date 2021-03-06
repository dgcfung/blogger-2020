import React, {useState} from 'react'

function CreateComment(props){
    let id = props.match.params.user_id
    const [formValues, setFormValues] = useState({
        body: ''
    })
    const [created, createComment] = useState(false)

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
      let res = await createComment(id, formValues)
      console.log(res)
      if(res.status === 200){
      props.history.push(`/users/${id}/posts`)
      }

  }


  return(
    <form onChange={handleChange}
    onSubmit={handleSubmit}>
    <input name="body" className="post-body" placeholder="Body" value= {formValues.body}/>
    <button className="button">Send</button>
    </form>
  )
}

export default CreateComment


