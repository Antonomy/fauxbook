import styles from './FriendsPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'

export default function FriendsPage() {
    return (
        <div>
            <ProfileNavBar />
            Loop and list out all the user's friends
            <ul>
                <li>Friend</li>
                <li>Friend</li>
                <li>Friend</li>
                <li>Friend</li>
                <li>Friend</li>
                <li>Friend</li>
                <li>Friend</li>
            </ul>
        </div>
    )
}