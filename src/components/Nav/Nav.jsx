import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import s from './Nav.module.css'
const Nav = () => {
    return <nav className={classes.naf}>
        <div className={classes.item}>
            <NavLink to='/profile' className={({isActive}) => (isActive ? s.active : s.item)}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users </NavLink>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        {/*<div className={`${classes.item} ${classes.active}`}>*/}
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
        <div className={classes.friends}>
            <a> Friends</a>
            <div className={classes.naf}>
                <img src='https://static4.depositphotos.com/1000650/470/i/950/depositphotos_4708708-stock-photo-businessman-saying-welcome.jpg'/>
                <img src='https://static4.depositphotos.com/1000650/470/i/950/depositphotos_4708708-stock-photo-businessman-saying-welcome.jpg'/>
                <img src='https://static4.depositphotos.com/1000650/470/i/950/depositphotos_4708708-stock-photo-businessman-saying-welcome.jpg'/>

            </div>

        </div>
</nav>


}
export default Nav