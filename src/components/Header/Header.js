import React from "react";
import s from './Header.module.css';

const Header = () =>{
    return(
        <div className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png'
                alt='sa'/>
        </div>
    )
}
export default Header