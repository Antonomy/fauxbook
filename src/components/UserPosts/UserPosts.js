import styles from './UserPosts.module.sass'

export default function UserPosts(props) {
    return (
        <div>
            <div className={styles.header}>
                <h3>Posts</h3>
                <div className={styles.settings}>
                    <h5>Filters</h5>
                    <h5>Manage Posts</h5>
                </div>
            </div>
            <div className={styles.UserPosts}>
                <h3>Posts</h3>
                <img src="user posts go here" />
            </div>
        </div>
    )
}