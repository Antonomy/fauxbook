import styles from './User.module.scss'
import { Link } from 'react-router-dom'
import { useState } from "react";
import AboutPage from '../../pages/AboutPage/AboutPage'

export default function User(props) {
    return (
        <div>
            <div className={styles.friend}>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="100" alt="photo" />
                </div>
                <li>{User.firstName}</li>
                <li>{User.lastName}</li>
                <li>{User.email}</li>
                <li>{User.birthday}</li>
                <li>{User.highSchool}</li>
                <li>{User.college}</li>
                <li>{User.currentCity}</li>
                <li>{User.hometown}</li>
                <li>{User.relationshipStatus}</li>
            </div>
        </div>
    )
}
