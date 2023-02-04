import './Post.css'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react";
import { Delete } from '@mui/icons-material';
import { ThumbUp } from '@mui/icons-material';
import { Send } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import PostsHeader from '../PostsHeader/PostsHeader';

export default function Post({
    post,
    deletePost,
    updatePost,
    user

}) {
    const inputRef = useRef(null)
    const [comment, setComment] = useState("")
    const [showInput, setShowInput] = useState(false)

    const handleChange = (evt) => {
        setComment(evt.target.value)
    }
    return (
        <div>
            <li>

                <div className='styles-Post'>
                    <div className='newsfeed-name'>
                        
                    <Link className='nfn' to={`/${user._id}/posts`}> {user.firstName} {user.lastName} </Link>
                    <Avatar src='data:image/jpeg;base64,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'></Avatar>
                    </div>
                    
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
                    {post.photo ?
                        <>
                            <img className='styles.postPhoto' src={post.photo} />
                        </>
                        :
                        <></>
                    }
                    <br />
                    
                    <div className='post__footer'>
                    <Delete onClick={() => deletePost(post._id)}>Delete Post</Delete>
                    <ThumbUp>Like</ThumbUp> &nbsp;
                    <Send>Share</Send> <br />
                    </div>
                    
                    <br/>

                    <form onSubmit>
                        <label>
                            <input type="text" className='comment' onChange={handleChange} value={comment} placeholder='Write A Comment' />
                        </label>
                        <input type="submit" value="post" />
                    </form>
                
                </div>
            </li>
        </div>
    )
}