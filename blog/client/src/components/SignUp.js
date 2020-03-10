import React from 'react'
import {Link} from 'react-router-dom'

function SignUp (props){
  
        return(
            <>
            <h1>Sign Up</h1> 
            <form onChange={props.handleChange}>
                <input type= "email" placeholder="email" name='email' value= {props.email}></input>
                <input type= "password" placeholder="pass" name='password' value= {props.password}></input>
                <button onClick={props.handleSubmit}>Sign Up</button>
            </form>
            </>
        )


}

export default SignUp