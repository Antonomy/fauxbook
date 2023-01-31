import styles from './Post.module.scss'
import { Link } from 'react-router-dom'
import { useState, useRef} from "react";

import PostsHeader from '../PostsHeader/PostsHeader';

export default function Post({
    post,
    deletePost,
    updatePost
    
}){
const inputRef = useRef(null)
const [comment, setComment] = useState("")
const [showInput, setShowInput] = useState(false)

const handleChange = (evt) => {
    setComment(evt.target.value)
}
    return (
        <div>
            <li>
            <div className={styles.Post}>
                <Link to="/postspage">UserName</Link>
                <p>date posted on</p>
                <h4 onClick={() => setShowInput(!showInput)}>{post.post}</h4>
                <input
                ref={inputRef}
                style={{ display: showInput ? 'block' : 'none' }}
                type='text'
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        const postText = inputRef.current.value 
                        updatePost(post._id, {postText})
                        setShowInput(false)
                    }
                }}
                defaultValue={post.post}
                />
                <button onClick={() => deletePost(post._id)}>Delete Post</button>
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
            </li>
        </div>
    )
}