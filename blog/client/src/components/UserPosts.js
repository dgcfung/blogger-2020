import React from 'react'
// import {BrowserRouter, Link} from 'react-router-dom'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link
} from 'react-router-dom'
import { readAllUserPosts } from '../api-helper'



function UserPosts(props) {
    console.log(props)
    let id = props.match.params.user_id
    const linkId = `/posts/${id}/create`
    // state = {
    //     isLoading: true,
    //     posts: [],
    //     error: null
    // }



    function handleClick() {
        props.history.push(`/posts/${id}/create`);
    }



        return (
          
                <div className="Posts">
                    <h1>User Posts</h1>
                    {/* <NavLink to=`/posts/${id}/create`>Create New Post</NavLink> */}

    <button type="button" onClick={handleClick}> Create New Post
    </button>
                   </div>

                );
            
            }
            
            
export default UserPosts