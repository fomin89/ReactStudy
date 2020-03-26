import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.iview.abc.net.au/thumbs/256/iv/IV1512H001S00_5e39f03b9ac0e_1280.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.LikesCount}
            </div>

        </div>
    )
}

export default Post;
