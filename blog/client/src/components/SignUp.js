import React from 'react'
import {Link} from 'react-router-dom'

function SignUp (props){
  
        return(
            <>
            <h1>Sign Up</h1> 
            <form onChange={props.handleChange}>
                <input type= "email" placeholder="email" name='email' value= {props.email}></input>
                <input type= "password" placeholder="pass" name='password' value= {props.password}></input>
                {/* <input type= "age" placeholder="age" name='age' value= {props.age}></input>
                <input type= "gender" placeholder="gender" name='' value= {props.gender}>gender</input>
                <input type= "location" placeholder="location" name='location' value= {props.location}></input> */}
                <button onClick={props.handleSubmit}>Sign Up</button>
            </form>
            </>
        )


}

export default SignUp