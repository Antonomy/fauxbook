import styles from './NewsFeedPage.module.sass'
import PostForm from '../../components/PostForm/PostForm'
import Post from '../../components/Post/Post'

export default function NewsFeedPage (props) {
    return (
        <main>
            <PostForm />
            <div>This is where we loop out all FRIENDS posts and order by timestamp</div>
            <div>Friends Birthdays in the upcoming 7 days</div>
            <Post />
        </main>
    )

}