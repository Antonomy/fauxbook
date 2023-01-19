import styles from './PostsPage.module.scss'

import NavBar from "../../components/NavBar/NavBar"
import PostForm from '../../components/PostForm'
import PhotosPreview from '../../components/PhotosPreview/PhotosPreview'

export default function PostsPage () {
    return(
        <div>
        <PostForm />
        <PhotosPreview />
        </div>
    )
}