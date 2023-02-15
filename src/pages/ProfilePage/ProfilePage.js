import styles from './ProfilePage.module.scss'

import NavBar from '../../components/NavBar/NavBar'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'
import Post from '../../components/Post/Post'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage ({ user }) {
  /* --- State --- */
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [token, setToken] = useState('')
  const [posts, setPosts] = useState([])
  const [foundPost, setFoundPost] = useState(null)
  const [newPost, setNewPost] = useState({
    post: ''
  })
  const [currentUser, setCurrentUser] = useState({})
  const { userId } = useParams()

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
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      //   const postsCopy = [...posts]
      //   const index = postsCopy.findIndex(post => id === post._id)
      //   postsCopy.splice(index, 1)
      setFoundPost(data)
    //   setPosts(postsCopy)
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

  const getOneUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getById = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`)
      const data = await response.json()
      setLoggedInUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  const doesUserOwnsPost = async (loggedInUser, post) => {
    for (let i = 0; i < loggedInUser.post.length; i++) {
      const userPost = loggedInUser.post[i]
      if (userPost._id === post._id) {
        return true
      }
    }
    return false
  }

  const handleChange = evt => {
    setNewPost({ ...newPost, [evt.target.name]: evt.target.value, user: user._id })
  }

  useEffect(() => {
    getOneUser()
    getById(user._id)
    getPosts()
    setToken(localStorage.getItem('token'))
  }, [foundPost, userId])

  return (
    <div>
      <ProfileNavBar
        user={currentUser || user}
      />
      <PostForm
        user={user}
        createPost={createPost}
        handleChange={handleChange}
        newPost={newPost}
      />
      <>
        {
                    currentUser.post && currentUser.post.length
                      ? (<ul>
                        {
                            currentUser.post.map((post) => {
                              const result = doesUserOwnsPost(loggedInUser, post)

                              return (
                                <Post
                                  user={currentUser}
                                  key={post._id}
                                  post={post}
                                  result={result}
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
