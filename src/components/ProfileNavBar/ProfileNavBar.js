import './ProfileNavBar.css';
import { Link } from 'react-router-dom';

export default function ProfileNavBar({user}) {


    return (
        <div className='styles.ProfileNavBar'>
            <div className='styles.coverPhoto'>
                <img src="" alt="cover photo goes here" />
                <button>Add Cover Photo</button>
            </div>
            <img src={user.profilePhoto} alt="profile picture" />
            <h2>{user.firstName} {user.lastName}</h2>

            {/* REQUEST FRIEND button should only show up if NOT FRIENDS and NOT SELF*/}
            <button>Request Friend</button>
            {/* This button should .push() user's _id to the recipients requests array */}
            {/* UNFRIEND button should only show up IF FRIENDS */}
            <button>Unfriend</button>
            {/* This button should .slice user's _id from the recipient's friends array */}
            <br />
            
            <Link to={`/${user._id}/posts`}>Posts</Link>
            &nbsp; | &nbsp;
            <Link to="/about">About</Link>
            &nbsp; | &nbsp;
            <Link to="/friends">Friends</Link>
            &nbsp; | &nbsp;
            <Link to="/photos">Photos</Link>
        </div>
    )
}