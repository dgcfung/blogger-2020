import React from 'react'
import {Link} from 'react-router-dom'

class SignIn extends React.Component{
    render(){
        return(
            <div>
            <h1>Sign In</h1> 
            {/* <hr />

            <form onSubmit= {(e)=>{
                e.preventDefault();
                this.props.handleLogin();

            }}>
            <p>Email:</p>
            <input name ="email" type= "text" value={this.props.formData.email} onChange={this.props.handleChange}/>
            <p>Password:</p>
            <input name="password" type= "password" value={this.props.FormData.password} onChange= {this.props.handleChange}/>
            <hr/>
            <button>Sign In</button>
            <Link to="/login/signup">Sign Up</Link>
            


            </form> */}
            </div>
        )

    }

}

export default SignIn