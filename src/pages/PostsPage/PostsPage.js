import styles from './PostsPage.module.scss'
import NavBar from "../../components/NavBar/NaBar"
import PostForm from "../../components/PostForm/PostForm"

export default function PostsPage() {
    return (
        <div>
            <NavBar />
            <PostForm />
        </div>
    )
}