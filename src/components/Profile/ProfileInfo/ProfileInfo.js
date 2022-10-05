import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://1000logos.net/wp-content/uploads/2017/03/nike-swoosh-logo.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + info
            </div>
         </div>

    )
}

export default ProfileInfo