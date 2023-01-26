import styles from './ProfileNavBar.module.scss';
import { Link } from 'react-router-dom';
import ProfileDirectory from '../ProfileDirectory/ProfileDirectory';

export default function ProfileNavBar(props) {
    return (
        <div className={styles.ProfileNavBar}>
            <div className={styles.coverPhoto}>
                <img src="" alt="cover photo goes here" />
                <button>Edit Cover Photo Here</button>
            </div>
            <img src="" alt="profile picture" />
            <h2>USERNAME</h2>
            {/* if not friends and not self*/}
            <button>Request Friend</button>
            {/* if friends */}
            
            <Link to="/friends">friends</Link>
            <ProfileDirectory />
        </div>
    )
}