import styles from './Request.module.scss'
import User from '../User/User'
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Request(props) {
const [comment, setComment] = useState("")

const handleChange = (evt) => {
    setComment(evt.target.value)
}
    return (
        <div>
            <ul>
                <User />
                <li>Requester Name</li>
                <button>Accept</button>
                <button>Reject</button>
            </ul>
        </div>
    )
}