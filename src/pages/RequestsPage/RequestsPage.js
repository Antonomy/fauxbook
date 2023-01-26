import styles from './RequestsListPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'

export default function RequestsListPage() {
    return (
        <div>
            <ProfileNavBar />
            Loop and list out all the user's friends REQUESTS here.
            <ul>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
                <li>FRIEND REQUEST</li>
            </ul>
        </div>
    )
}