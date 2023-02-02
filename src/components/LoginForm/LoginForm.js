import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import { Link, useNavigate} from 'react-router-dom'
import './LoginForm.css'


export default function LoginForm ({ setUser, setShowSignUp}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate() 

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      // navigate('/newsfeed')
    } catch (error) {
      setError(error.message)
    }
  }



  return (
    <div className='login-main'>
    <div className="title-box">
    <h1>fauxbook</h1>
    <h2>Connect with friends and the world around on Facebook.</h2>
    </div>  
    <div className='box'>
      <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <div className='form-box'>
          <label>Email</label>
          <input type='email' name='email' value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <button type='submit'>LOG IN</button>
           <button className='create-btn' onClick={(evt) => {
            setShowSignUp(true)
          }}>Create A New Account</button>
          
          </div>

        </form>
      </div>
      
      <h1 className='error-message'>&nbsp;{error}</h1>
    </div>
    </div>
  )
}