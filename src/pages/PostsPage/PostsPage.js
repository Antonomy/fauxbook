import './PostsPage.css'

import NavBar from '../../components/NavBar/NavBar'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'
import PostsHeader from '../../components/PostsHeader/PostsHeader'
import Post from '../../components/Post/Post'
import { useEffect, useState } from 'react'

export default function PostsPage ({ user }) {
  /* --- State --- */

  const [token, setToken] = useState('')
  const [posts, setPosts] = useState([])
  const [foundPost, setFoundPost] = useState(null)
  const [newPost, setNewPost] = useState({
    post: ''
  })
  // index
  const getPosts = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await response.json()
      setPosts(data.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  // delete
  const deletePost = async (id) => {
    try {
      const response = await fetch(`api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const postsCopy = [...posts]
      const index = postsCopy.findIndex(post => id === post._id)
      postsCopy.splice(index, 1)
      setPosts(postsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  // update
  const updatePost = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const postsCopy = [...posts]
      const index = postsCopy.findIndex(post => id === post._id)
      postsCopy[index] = { ...postsCopy[index], ...updatedData }
      setPosts(postsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  // create
  const createPost = async () => {
    try {
      console.log({ user })
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...newPost, user: user._id })
      })
      const data = await response.json()
      setFoundPost([data, ...posts])
    } catch (error) {
      console.error(error)
    } finally {
      setNewPost({
        post: ''
      })
    }
  }

  console.log(user)

  const handleChange = evt => {
    setNewPost({ ...newPost, [evt.target.name]: evt.target.value, user: user._id })
  }

  useEffect(() => {
    getPosts()
    setToken(localStorage.getItem('token'))
  }, [foundPost])

  return (
    <div>
      <ProfileNavBar
        user={user}
      />
      <PostForm
        user={user}
        createPost={createPost}
        handleChange={handleChange}
        newPost={newPost}
      />
      <PostsHeader />
      <>
        {
                    posts && posts.length
                      ? (<ul>
                        {
                            posts.map((post) => {
                              return (
                                <Post
                                  user={post.user}
                                  key={post._id}
                                  post={post}
                                  deletePost={deletePost}
                                  updatePost={updatePost}
                                />

                              )
                            })
                        }
                      </ul>)
                      : <h1>No posts yet</h1>
                }
      </>
    </div>
  )
}
