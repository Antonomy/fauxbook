import styles from './PostsPage.module.sass'

import NavBar from "../../components/NavBar/NavBar"
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import Posts from '../../components/Post/Post'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'
import PostsHeader from '../../components/PostsHeader/PostsHeader'
import Post from '../../components/Post/Post'
import { useState } from 'react'
import * as postsAPI from '../../utilities/posts-api';

export default function PostsPage () {
 /*--- State --- */
 const [posts, setPosts] = useState([]);

    async function newPost() {
        const createPost = await postsAPI.createPost();
        
    }

    async function fetchUserPosts() {
        const userPosts = await postsAPI.getUserPosts();
        setPosts(posts);
    }

    return(
        <div>
        <ProfileNavBar />
        <PostForm newPost={newPost}/>
        <PostsHeader />
        <ul> THIS IS A LOOP
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        </ul>
        {/* <PhotosPreview />
        <FriendsPreview /> */}
        </div>
    )
}