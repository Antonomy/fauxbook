import './Post.css'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

import PostsHeader from '../PostsHeader/PostsHeader'

export default function Post ({
  post,
  deletePost,
  updatePost,
  user,
  result

}) {
  const inputRef = useRef(null)
  const [comment, setComment] = useState('')
  const [showInput, setShowInput] = useState(false)

  const handleChange = (evt) => {
    setComment(evt.target.value)
  }
  return (
    <div>
      <li className="post-container">


        <div className='styles-Post'>
        <img src={user.profilePhoto} alt='profile picture' className="postprofilephoto"/>
        <br/>
          <Link className='nfn' to={`/${user._id}/posts`}> {user.firstName} {user.lastName} </Link>
          posted on
          <span>{post.createdAt.slice(0, -14)}</span>
          <br />
          <text onClick={() => setShowInput(!showInput)}>{post.post}</text>
          <input
            ref={inputRef}
            style={{ display: showInput ? 'block' : 'none' }}
            type='text'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const postText = inputRef.current.value
                updatePost(post._id, { postText })
                setShowInput(false)
              }
            }}
            defaultValue={post.post}
          />
          <br />
          {post.photo
            ? <>
              <img className='styles.postPhoto' src={post.photo} />
            </>
            : <></>}
          <br />
          {/* <button onClick={() => deletePost(post._id)}>Delete Post</button>
                    <button>Like</button> &nbsp;
                    <button>Share</button> <br /> */}
          <form onSubmit>
            <label>
              <input type='text' onChange={handleChange} value={comment} placeholder='Write A Comment' />
            </label>
            <input type='submit' value='post' />
          </form>
          <div className='post__footer'>
            {
              result ?
              <button onClick={() => deletePost(post._id)}>Delete Post</button> :
              ""
            }
           
            <button>Like</button> &nbsp;
            <button>Share</button> <br />
          </div>
        </div>
      </li>
    </div>
  )
}
