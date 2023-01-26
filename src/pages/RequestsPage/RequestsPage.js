import styles from './RequestsPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import Request from '../../components/Request/Request'

export default function RequestsListPage() {
    return (
        <div>
            <ProfileNavBar />
            Loop and list out all the user's friends REQUESTS here.
            <ul>
                <Request />
                <Request />
                <Request />
                <Request />
                <Request />
                <Request />
            </ul>
        </div>
    )
}