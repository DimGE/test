import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://abrakadabra.fun/uploads/posts/2022-02/1646064615_1-abrakadabra-fun-p-ava-na-vatsap-dlya-devushki-prikolnie-7.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>
                    like {props.count}
                </span>
            </div>
        </div>
    )
}
export default Post