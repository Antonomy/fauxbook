import './NewsFeedPage.css'
import PostForm from '../../components/PostForm/PostForm'
import Post from '../../components/Post/Post'

export default function NewsFeedPage (props) {
    return (
        <main>
            <div>Friends Birthdays in the upcoming 7 days</div>
            
            {/* <PostForm /> */}
            
            <div>This is where we loop out all FRIENDS POSTS and order by timestamp</div>
            {/* <Post />
            <Post />
            <Post />
             */}
        </main>
    )

}