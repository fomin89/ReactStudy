import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img.lignes-formations.com/wp-content/uploads/sites/45/2019/05/reportage-photo-niveau-formation.jpg',
                followed: false,
                fullName: 'Oleg',
                status: 'Nice be here',
                location: {city: 'Spb', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://s3.envato.com/files/139127449/Image%20Preview_Woman%20Taking%20Picture%20With%20Smartphone.jpg',
                followed: true,
                fullName: 'Olga',
                status: 'Wonderful time',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://www.livingwaters.com/wp-content/uploads/2017/12/true-false-conversion-featured-image.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'Watch TV',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://previews.123rf.com/images/mitarart/mitarart1105/mitarart110500125/9666925-woman-taking-photo-with-old-fashioned-camera-.jpg',
                followed: true,
                fullName: 'Diana',
                status: 'Work, Work, Work',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ],)
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoUrl} className={s.userPhoto}/>
    </div>
    {u.followed
        ? <button onClick={() => {
            props.unfollow(u.id)
        }}>Unfollow</button>
        : <button onClick={() => {
            props.follow(u.id)
        }}>Follow</button>}

</span>
                <span>
    <span>
    <div>{u.fullName}</div>
    <div>{u.status}</div>
        </span>
    <span>
    <div>{u.location.country}</div>
    <div>{u.location.city}</div>
        </span>
</span>
            </div>)
        }
    </div>

};
export default Users