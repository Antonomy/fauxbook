import styles from './RequestsPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import Request from '../../components/Request/Request'

export default function RequestsListPage({user}) {
    return (
        <div>
            <ProfileNavBar user={user}/>
            <ul>
                <h2>Requests</h2>
            </ul>
        </div>
    )
}