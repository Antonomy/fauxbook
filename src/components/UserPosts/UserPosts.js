import styles from './UserPosts.module.sass'
import { Link } from 'react-router-dom'
import { useState } from "react";

import PostsHeader from '../PostsHeader/PostsHeader';

export default function UserPosts(props) {
const [comment, setComment] = useState("")

const handleChange = (evt) => {
    setComment(evt.target.value)
}
    return (
        <div>
            <div className={styles.UserPosts}>
                <Link to="/postspage">UserName</Link>
                <p>date posted on</p>
                <button>...</button>
                <img src="user posts go here" /> <br />
               <button>Like</button> &nbsp; 
               <button>Comment</button> &nbsp; 
               <button>Share</button> <br />
               <form onSubmit>
                    <label>
                        <input type="text" onChange={handleChange} value={comment} placeholder='Write A Comment' />
                    </label>
                    <input type="submit" value="post" />
                </form>
            </div>
        </div>
    )
}