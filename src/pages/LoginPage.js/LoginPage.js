// Log In Page
import "./LoginPage.module.scss"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function LogInPage(props){
    return(
        <main>
            <h1>fauxbook</h1>
            <h2>Connect with friends and the world around on Facebook.</h2>
            <LoginForm setUser={props.setUser}/>          
        </main>
    )
}