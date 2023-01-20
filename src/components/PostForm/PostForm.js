import styles from './PostForm.module.sass'

export default function PostForm() {
    return (
        <div>
            <div className={styles.postForm}>
                <form>
                    <label>
                        <input type="text" name="name" placeholder='Whats on your mind?'/>
                    </label>
                    <input type="submit" value="post" />
                </form>
            </div>
        </div>
    )
}