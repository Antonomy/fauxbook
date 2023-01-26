import styles from './PhotosPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import Photo from '../../components/Photo/Photo'

export default function PhotosPage () {
    return (
        <div>
            <ProfileNavBar />
            <ul>
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            </ul>
        </div>
    )
}