// Log In Page

import LoginForm from "../../components/LoginForm/LoginForm"
import styles from './LoginPage.module.scss'

export default function LogInPage(props){
    return(
        <main>
            <h1>facebook</h1>
            <p>Connect with friends and the world around on Facebook.</p>
            <LoginForm setUser={props.setUser}/>
        </main>
    )
}
