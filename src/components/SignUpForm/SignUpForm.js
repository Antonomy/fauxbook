import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import styles from './SignUpForm.module.scss'

export default function SignUpForm ({setUser}) {
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
      // const formData = { ...credentials }
      // delete formData.error
      const user = await userService.signUp(credentials)
      setUser(user)
    } catch (error) {
      setError({ error: 'Sign Up Failed' })
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
                <p>People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <button type="submit" disabled={disable}>SIGN UP</button>
                
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        );
      
}

    // handleSubmit = async (evt) => {
    //   evt.preventDefault()
    //   try {
    //     const formData = { ...this.state }
    //     delete formData.error
    //     const user = await signUp(formData)
    //     this.props.setUser(user)
    //   } catch (error) {
    //     this.setState({ error: 'Sign Up Failed' })
    //   }
    // }

    // handleChange = (evt) => {
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     })
    // }

//     render() {
//         const disable = this.state.password !== this.state.confirm;
//         return (
//           <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <label>First Name</label>
//                 <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
//                 <label>Email</label>
//                 <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                 <label>Confirm Password</label>
//                 <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                 <label>Birthday</label>
//                 <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange} required />
//                 <p>People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
//                 By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
//                 <button type="submit" disabled={disable}>SIGN UP</button>
                
//               </form>
//             </div>
//             <p className="error-message">&nbsp;{this.state.error}</p>
//           </div>
//         );
//       }
// }