import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

export default function Navbar() {

    const [clicked, setClicked] = useState(() => {return false;})
    function handleClick(){
        return setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <img src="main-logo.png" alt="logo" className={clicked ? "vividly-logo-mid" : "vividly-logo"}/>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => { 
                    return(
                        <li key={index}>
                            <a className={item.class_name} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
