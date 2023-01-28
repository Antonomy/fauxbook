import styles from './User.module.scss'
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function User(props) {
    return (
        <div>
            <div className={styles.Friend}>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="100" alt="photo" />
                </div>
                <li>NAME user.name</li>
                <li>Current City user.currentCity</li>
            </div>
        </div>
    )
}