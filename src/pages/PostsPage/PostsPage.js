import styles from './PostsPage.module.sass'

import NavBar from "../../components/NavBar/NavBar"
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'
import PostsHeader from '../../components/PostsHeader/PostsHeader'
import Post from '../../components/Post/Post'
import { useEffect, useState } from 'react'




export default function PostsPage() {
    /*--- State --- */
    const [token, setToken] = useState('')
    const [posts, setPosts] = useState([]);
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
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
               } 
            })
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }

    //delete 
    const deletePost = async (id) => {
        try {
            const response = await fetch(`api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundPost(data)
        } catch (error) {
            console.error(error)
        }
    }

    //create 
    const createPost = async () => {
        try {
            const response = await fetch(`/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ ...newPost })
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

    const handleChange = evt => {
        setNewPost({ ...newPost, [evt.target.name]: evt.target.value })
    }

    useEffect(() => {
        getPosts()
    }, [foundPost])
    // async function newPost() {
    //     const createPost = await postsAPI.createPost();

    // }

    // async function fetchUserPosts() {
    //     const userPosts = await postsAPI.getUserPosts();
    //     setPosts(posts);
    // }

    return (
        <div>
            <ProfileNavBar />
            <PostForm 
            createPost={createPost}
            handleChange={handleChange}
            newPost={newPost}

            />
            <PostsHeader />
            <>
                {
                    posts && posts.length ? (<ul>
                        {
                            posts.map((post) => {
                                return (
                                <Post 
                                key={post._id}
                                post={post}
                                />
                                
                                )
                            })
                        }
                    </ul>) : <h1>No posts yet</h1>
}
            </>
            {/* <ul> THIS IS A LOOP
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        </ul> */}
            {/* <PhotosPreview />
        <FriendsPreview /> */}
        </div>
    )
}