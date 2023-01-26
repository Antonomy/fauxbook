// Log In Page
import "./LoginPage.module.scss"
import LoginForm from "../../components/LoginForm/LoginForm"
import styles from './LoginPage.module.scss'

export default function LogInPage(props){
    return(
        <main>
            <div>
            <h1>fauxbook</h1>
            <h2>Connect with friends and the world around on Facebook.</h2>
            </div>  
            <LoginForm setUser={props.setUser}/>        
        </main>
    )
}
