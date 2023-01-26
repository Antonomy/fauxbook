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

            {/* REQUEST FRIEND button should only show up if NOT FRIENDS and NOT SELF*/}
            <button>Request Friend</button>
            {/* This button should .push() user's _id to the recipients requests array */}
            {/* UNFRIEND button should only show up IF FRIENDS */}
            <button>Unfriend</button>
            {/* This button should .slice user's _id from the recipient's friends array */}

            <Link to="/friends">friends</Link>
            <ProfileDirectory />
        </div>
    )
}