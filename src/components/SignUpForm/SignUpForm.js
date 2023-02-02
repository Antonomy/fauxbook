import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import styles from './SignUpForm.module.scss'

export default function SignUpForm ({setUser, setShowSignUp}) {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    birthday: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = { ...credentials }
      delete formData.confirm
      const user = await userService.signUp(formData)
      setUser(user)
    } catch (error) {
      setError('Sign Up Failed')
    }
  }
 

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
  }

const disable = credentials.password !== credentials.confirm;

return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" value={credentials.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input type="text" name="lastName" value={credentials.lastName} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                <label>Confirm Password</label>
                <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                <label>Birthday</label>
                <input type="date" name="birthday" value={credentials.birthday} onChange={handleChange} required />
                <p>People who use our service may have uploaded your contact information to Fauxbook. Learn more. <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <button type="submit" disabled={disable}>SIGN UP</button>
                <button onClick={() => {
            setShowSignUp(false)
          }}>Already have an account?</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        );
      
}

