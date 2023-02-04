import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './AuthPage.module.scss'
import { useState, useEffect } from 'react'

export default function AuthPage(props) {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <main className={styles.AuthPage}>
      <div className='login-main'>
        <div className='title-box'>
          <h1>fauxbook</h1>
          <h2>Connect with friends and the world around on Fauxbook.</h2>
        </div>
        <div className={styles.forms}>
          {
            showSignUp
              ? <SignUpForm setUser={props.setUser} setShowSignUp={setShowSignUp} />
              : <LoginForm setUser={props.setUser} setShowSignUp={setShowSignUp} />

          }

        </div>
      </div>
    </main>
  )
}
