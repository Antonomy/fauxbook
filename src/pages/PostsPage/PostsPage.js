import styles from './PostsPage.module.sass'

import NavBar from "../../components/NavBar/NavBar"
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import UserPosts from '../../components/UserPosts/UserPosts'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'

export default function PostsPage () {
    return(
        <div>
        <ProfileNavBar />
        <PostForm />
        <UserPosts />
        <PhotosPreview />
        <FriendsPreview />
        </div>
    )
}