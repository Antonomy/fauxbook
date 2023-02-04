import './PostForm.css'

export default function PostForm ({
  createPost,
  handleChange,
  newPost

}) {
  const onSubmit = (e) => {
    e.preventDefault()
    createPost()
  }
  return (
    <div className="post-form-container">
      <form onSubmit={onSubmit} className='postform'>
          <input
            type='text' className='woym' onChange={handleChange} value={newPost.post}
            name='post' placeholder='Whats on your mind?'
          />
          <input
            className='ip' type='text' onChange={handleChange} value={newPost.photo}
            name='photo' placeholder='Insert Photo Link Here (optional)'
          />
        <input className='post-btn' type='submit' value='post' />
      </form>

    </div>
  )
}
