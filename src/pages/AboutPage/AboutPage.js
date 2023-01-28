import styles from './AboutPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import editIcon from './images/editpencilicon.png'

export default function AboutPage() {
    return (
        <div>
            <ProfileNavBar />
            <div>
                <User />
            </div>
            Name: 
            <br />
            Email: <img height='10' src={editIcon} />
            <div>Bio - this is like a brand statement<img height='10' src={editIcon} /></div>
            <div>Birthday<img height='10' src={editIcon} /></div>
            <div>Workplace<img height='10' src={editIcon} /></div>
            <div>High School<img height='10' src={editIcon} /></div>
            <div>College<img height='10' src={editIcon} /></div>
            <div>Current City<img height='10' src={editIcon} /></div>
            <div>Hometown<img height='10' src={editIcon} /></div>
            <div>Relationship Status<img height='10' src={editIcon} /></div>
            <div>Workplace<img height='10' src={editIcon} /></div>

        </div>
    )
}