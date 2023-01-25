import styles from './NewsFeedPage.module.sass'
import PostForm from '../../components/PostForm/PostForm'

export default function NewsFeedPage (props) {
    return (
        <main>
            <PostForm />
            <div>Friends Birthdays in the upcoming 7 days</div>
        </main>
    )

}