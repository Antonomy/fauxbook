import styles from './FriendsPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'

export default function FriendsPage() {
    return (
        <div>
            {/* <ProfileNavBar /> */}
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