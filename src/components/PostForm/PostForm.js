import './PostForm.css'
import { useState } from 'react'

export default function PostForm ({
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
    <div className='postform'>

      <form onSubmit={onSubmit}>
        <label>
          <input
            type='text' className='woym' onChange={handleChange} value={newPost.post}
            name='post' placeholder='Whats on your mind?'
          />
          <input
            className='ip' type='text' onChange={handleChange} value={newPost.photo}
            name='photo' placeholder='Insert Photo Link Here (optional)'
          />
        </label>
        <input className='post-btn' type='submit' value='post' />
      </form>

    </div>
  )
}
