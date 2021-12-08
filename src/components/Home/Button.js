import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <div className="wrapper">
            <span className="cta">{props.buttonName}</span>
        </div>
    )
}
