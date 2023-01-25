import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import styles from './SignUpPage.module.scss'


export default class SignUpPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleSubmit = async (evt) => {
      evt.preventDefault()
      try {
        const formData = { ...this.state }
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch (error) {
        this.setState({ error: 'Sign Up Failed' })
      }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="first-name" value={this.state.name} onChange={this.handleChange} required />
                <label>Last Name</label>
                <input type="text" name="last-name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm Password</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <label>Birthday</label>
                <input type="date" name="birthday" value={this.state.name} onChange={this.handleChange} required />
                <p>People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <button type="submit" disabled={disable}>SIGN UP</button>
                
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}