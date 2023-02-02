import styles from './RequestsPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import Request from '../../components/Request/Request'

export default function RequestsListPage() {
    return (
        <div>
            {/* <ProfileNavBar /> */}
            <ul>
                <Request />
                <Request />
                <Request />
            </ul>
        </div>
    )
}