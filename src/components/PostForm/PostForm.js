import './PostForm.css';
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
            <div className="postform">
                <form onSubmit={onSubmit}>
                    <label className='woym'>
                        <div className='td' id='c-inp'>
                        <input type="text" onChange={handleChange} value={newPost.post} 
                        name='post' placeholder='Whats on your mind?' /> 
                        </div>
                        </label>
                        <label className='ipp'>
                        <input className='ip' type="text" onChange={handleChange} value={newPost.photo} 
                        name='photo' placeholder='' />
                    </label>
                    <input className='post-btn' type="submit" value="post" />
                </form>
            </div>
        </div>
    )
}