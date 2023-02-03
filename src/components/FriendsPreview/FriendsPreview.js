import styles from './FriendsPreview'

export default function FriendsPreview (props) {
  return (
    <div className={styles.FriendsPreview}>
      <h3>Friends</h3>
      <p>See all friends</p>
      {/* amt of friends --- would need to connect to DB */}
    </div>
  )
}
