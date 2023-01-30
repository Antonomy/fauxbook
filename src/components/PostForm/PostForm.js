import styles from './PostForm.module.sass'
import { useState } from "react";

export default function PostForm({
    newPost
}) {
    const [post, setPost] = useState("")

    const handleChange = (evt) => {
        setPost(evt.target.value)
    }
    return (
        <div>
            <div className={styles.postForm}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    newPost()
                }}>
                    <label>
                        <input type="text" onChange={handleChange} value={post} placeholder='Whats on your mind?' />
                    </label>
                    <input type="submit" value="post" />
                </form>
            </div>
        </div>
    )
}