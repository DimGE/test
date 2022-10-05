import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'hi, it`s my first react project ', likesCount: 12},
        {id: 2, message: 'Nice, i think tou will do all', likesCount: 8547},
        {id: 3, message: 'Nice', likesCount: 56},
        {id: 4, message: 'Nice, i think tou will do all', likesCount: 856},
        {id: 5, message: 'ggg boy', likesCount: 333},
        {id: 6, message: 'yes', likesCount: 974}];

    let postsElements = postsData.map(p => (<Post message={p.message} count={p.likesCount}/>));
    return (
        <div className={s.myposts}>

            <h2>My posts</h2>
            <div>
                <textarea name="dsd" id="" cols="25" rows="2"> write somthing</textarea>
            </div>
            <button>add new post</button>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} count={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} count={postsData[1].likesCount}/>*/}
                {/*<Post message={postsData[2].message} count={postsData[2].likesCount}/>*/}
                {/*<Post message={postsData[3].message} count={postsData[3].likesCount}/>*/}
                {/*<Post message={postsData[4].message} count={postsData[4].likesCount}/>*/}

            </div>
        </div>
    )
}

export default MyPosts