import React from 'react'

function SignUp (props){
  console.log(props)
    let id = props.match.params.user_id
// handleSubmit 

const handleChange =(e)=> {
    let {name, value} = e.target
    setFormValues(prevState => ({
        ...prevState,
        [name]: value
    }))
}

// function handleClick() {
//     props.history.push(`/posts/${id}/create`);
//   }
function handleSubmit() {
    props.history.push(`/profile/${id}`);
  }

        return(
            <>
            <h1>Sign Up</h1> 
            <form onChange={props.handleChange}>
                <input name= "email" type= "email" placeholder="email" name='email' value= {props.email}></input>
                <input name= "password" type= "password" placeholder="pass" name='password' value= {props.password}></input>
                {/* <input type= "age" placeholder="age" name='age' value= {props.age}></input>
                <input type= "gender" placeholder="gender" name='' value= {props.gender}>gender</input>
                <input type= "location" placeholder="location" name='location' value= {props.location}></input> */}
                <button onClick={props.handleSubmit}>Sign Up</button>
            </form>
            </>
        )


}

export default SignUp