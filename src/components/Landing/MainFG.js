import React from 'react'
import GoogleButton from 'react-google-button'
import './MainFG.css'

export default function MainFG() {
    return (            
        <div className="landing-page">
            <section className="split left">
                <div class="left-side">
                    <h1 class="main-vividly" >Vividly</h1>
                    <p class="main-para">A secure end-to-end encryption Communication Platform for everyone</p>
                    <GoogleButton className="google-button" />
                </div>
                
            </section>
            <section className="split right">
                <img class="vector-image" src="video call vector.png" alt="Video Call Vector"/>
            </section>
        </div>
    )
}
