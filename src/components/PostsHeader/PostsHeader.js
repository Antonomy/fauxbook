import styles from './PostsHeader.module.scss'

export default function PostsHeader(props) {
    return (
        <div className={styles.header}>
            <h3>Posts</h3>
            <div className={styles.settings}>
                <h5>Filters</h5>
                <h5>Manage Posts</h5>
            </div>
        </div>
    )
}
