import React from 'react'

export default function Navbar() {
    return (
        <>
        <div class="navbar">
            <nav class="navbar-left">
                <img alt="Vividly Logo" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/30/000000/external-letter-v-hand-gestures-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" id="v-logo"/>
                <h1 class="navbar-headers" id="logo-vividly-text">Vividly</h1>
                <h1 class="navbar-headers">About Us</h1>
            </nav>
            <nav class="navbar-right">
                <h1 class="navbar-headers">Sign In</h1>
                <h1 class="navbar-headers">Get Started</h1>
            </nav>
            <div class="clear"></div>
        </div>
        <br/>
        </>
    )
}
