// Log In Page
import "./LoginPage.css"
import LoginForm from "../../components/LoginForm/LoginForm"


export default function LogInPage(props){
    return(
        <main className="login-main">
            <div className="title-box">
            <h1>fauxbook</h1>
            <h2>Connect with friends and the world around on Facebook.</h2>
            </div>  
            <LoginForm setUser={props.setUser}/>        

        </main>
    )
}
