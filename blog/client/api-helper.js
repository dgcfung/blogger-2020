import axios from 'axios'
import App from './src/App'

const baseURL = 'localhost:3000'

// user create, CRUD'
const api= axios.create({
    baseURL: baseUrl
})


export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const resp = await api.get('/auth/verify');
      return resp.data
    }
    return false
  }

  const createUser= async (data)=>{
      const resp= await api.post('/users', {user:data})
    return resp.data
  }

  const readAllUsers= async()=> {
      const resp= await api.get('/users')
  }

  const updateUser= async()=>{
      const resp= await api.put(`/users/${id}`,{teacher:data})
      return resp.data
  }

  const destroyUser= async(id)=>{
      const resp= await api.delete(`/users/${id}`)
      return resp.data
  }

  const createPost= async(data)=>{
      const resp= await api.post(`posts/${id}`)
      return resp.data
  }

  const readAllUserPosts= async()=>{
      const resp= await api.get(   `/posts/${id}`)
      return resp.data
  }

//   need check route
  const readAllPosts= async()=>{
      const resp  = await api.get('/posts')
      return resp.data
  }

//   check route
  const updatePost= async()=>{
      const resp= await api.post(`/posts/${id}/edit/${id}`)
      return resp.data
  }

  const destroyPost= async()=>{
      const resp= await api.delete(`/posts/${id}`)
      return resp.data
  }


  export{
      createUser,
      readAllUsers,
      updateUser,
      destroyUser,
      createPost,
      readAllUserPosts,
      readAllUsers,
      readAllPosts,
      updatePost,
      destroyPost


  }