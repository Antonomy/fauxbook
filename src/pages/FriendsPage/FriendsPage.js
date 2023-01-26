import styles from './FriendsPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'

export default function FriendsPage() {
    return (
        <div>
            <ProfileNavBar />
            Loop and list out all the user's friends
            <ul>
                <User />
                <User />
                <User />
                <User />
                <User />
            </ul>
        </div>
    )
}