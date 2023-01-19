import styles from './PostsPage.module.scss'
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