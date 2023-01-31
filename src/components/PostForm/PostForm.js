import styles from './PostForm.module.sass'
import { useState } from "react";


export default function PostForm({
    createPost,
    handleChange,
    newPost
    

   
   

}) {
    // const [post, setPost] = useState("")
    
    // const handleChange = (evt) => {
    //     setPost(evt.target.value)

    // }
    const onSubmit = (e) => {
        e.preventDefault()
        createPost()
    }
    return (
        <div>
            <div className={styles.postForm}>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type="text" onChange={handleChange} value={newPost.post} 
                        name='post' placeholder='Whats on your mind?' />
                    </label>
                    <input type="submit" value="post" />
                </form>
            </div>
        </div>
    )
}