import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.heafer}>
        <img src='https://i.pinimg.com/736x/80/1e/1e/801e1eb26c3f8796266aa569f4ce2bf8.jpg'/>
    <div className={s.login}>
        {props.isAuth ? props.login
      :  <NavLink to='/login' > Login </NavLink>}
    </div>
    </header>
}

export default Header