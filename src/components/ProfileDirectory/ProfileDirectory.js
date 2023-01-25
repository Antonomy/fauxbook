import styles from './ProfileDirectory'
import { Link } from 'react-router-dom'

export default function ProfileDirectory(props) {
    return (
        <div>
            <Link to="/postspage">Posts</Link>
            &nbsp; | &nbsp;
            <Link to="/about">About</Link>
            &nbsp; | &nbsp;
            <Link to="/friends">Friends</Link>
            &nbsp; | &nbsp;
            <Link to="/photos">Photos</Link>
            &nbsp; | &nbsp;
        </div>
    )
}