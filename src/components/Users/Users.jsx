import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

let Users =(props)=> {

    let pages = []
    let pagesOfNumber = Math.ceil(props.totalCount / (450* props.usersOnPage))
    for (let i = 1; i <= pagesOfNumber; i++) {
        pages.push(i)
    }

    return <div>

        <div>
            {pages.map(pages => {
                return <button className={props.currentPage === pages && s.pages}

                             onClick={()=> props.changedPage(pages)} > {pages} </button>
            })}
        </div>
        { props.us.map(use => <div key={use.id}>
            <span>
            <div>

                <NavLink to = {'./../profile/'+use.id }>
                    <img  src = {use.photos.small !== null ? use.photos.small :'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} className={s.avatar}/>
                    </NavLink>

                    </div>
                <div> {use.followed === true
                    ? <button  disabled= {props.isFollowingProcess.some(userId=>userId===use.id)}
                               onClick={() => {props.unfollowThunk(use.id)
                    }}>
                        Unfollow</button>
                    : <button disabled = {props.isFollowingProcess.some(userId=>userId===use.id)}
                              onClick={()=> {props.followThunk(use.id)
                    }}>
                        Follow</button>}
                </div>
            </span>
            <span>
                <div> {use.name}</div>
                  <div> {use.status}</div>
                </span>
            <span>
                 {/*<div> 'use.location.country'</div>*/}
                  {/*<div> {use.location.city}</div>*/}
            </span>

        </div> )}
    </div>}


export default Users