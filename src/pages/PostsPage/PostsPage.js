import styles from './PostsPage.module.sass'

import NavBar from "../../components/NavBar/NavBar"
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import PostForm from '../../components/PostForm/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'
import Posts from '../../components/Post/Post'
import FriendsPreview from '../../components/FriendsPreview/FriendsPreview'
import PostsHeader from '../../components/PostsHeader/PostsHeader'

export default function PostsPage () {
    return(
        <div>
        <ProfileNavBar />
        <PostForm />
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