import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile';
import Posts from './components/Posts'
import EditPost from './components/EditPost'
import UserPosts from './components/UserPosts'
import CreateNewPost from './components/CreateNewPost'
import Comment from './components/Comment'
import CreateComment from './components/createComment'

import {
  registerUser,
  loginUser,
  readAllUsers,
  updateUser,
  destroyUser,
  createPost,
  readAllUserPosts,
  readAllPosts,
  updatePost,
  destroyPost
} from './api-helper'


class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    users:[],
    posts:[],
  currentUser: null,
  authFormData: {
    email: "",
    password: ""
  },
  }
}

//   async componentDidMount() {
//     this.readAllUsers();
//     const currentUser = await verifyUser();
//     if (currentUser) {
//       this.setState({ currentUser })
//     }
//   }

//   getUsers = async () => {
//     const users = await readAllUsers();
//     this.setState()
//   }

//   createUser = async (e) => {
//     e.preventDefault();
//     const teacher = await createUser(this.state.signup);
//     this.setState(prevState => ({
//       users: [...prevState.users, user]
//     }))
//   }

//   editUser = async () => {
//     const { teacherForm } = this.state
//     await updateUser(teacherForm.id, teacherForm);
//     this.setState(prevState => (
     
//     ))
//   }

handleChange = (e)=> {
  console.log('h')
  let name = e.target.name
  let value = e.target.value
  this.setState({
    authFormData: {...this.state.authFormData, [name]: value}
  })
}

handleSignUp = async(e)=>{
e.preventDefault()
let res = await registerUser(this.state.authFormData)
console.log(res)

}

handleSignIn = async(e)=>{
  e.preventDefault()
  let res = await loginUser(this.state.authFormData)
  console.log(res)
  this.props.history.push(`/profile/${res.id}`)
  
}
  

render () {
  let {email, password} =this.state.authFormData
  return (
      <React.Fragment>

        {/* render routes here */}
        <Header />
        <Route exact path="/" component={About}/>
        <Route exact path="/login/sign_in">
          <SignIn email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignIn}/>
        </Route>
        <Route exact path="/login/signup">
          <SignUp email={email} password={password} handleChange={this.handleChange} handleSubmit={this.handleSignUp}/>
        </Route>
        <Route exact path="/profile/:user_id" component={Profile}/>
        <Route exact path= "/profile/:user_id/edit" component={EditProfile}/>
        <Route exact path="/posts/:user_id/:post_id" component={Posts}/>
        <Route exact path= "/posts/:user_id/create" component={CreateNewPost}/>
        <Route exact path="/posts/:user_id" component={UserPosts}/>

        {/* reading both routes starting with /posts/:user_id */}
        {/* <Route exact path="/posts/:user_id" component= {Comment}/> */}
        {/* only render comments when you see a single post */}
        <Route exact path= "/posts/comments/create" component= {CreateComment}/>
        <Footer/>
      </React.Fragment>
  );
}
}

export default withRouter(App)
