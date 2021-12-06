import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FeatureList } from './FeatureList'
import './Home.css'

export default function Home(props) {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <li><img src={props.img} alt="Profile" className="profile-pic" /></li>
                    <li><h1 className="username">{props.userName}</h1></li>
                </div>
            </div>
            <div className="dashboard">
                <div className="dashboard-wrapper">
                    <ul className="feature-list">
                        {FeatureList.map((item, index) => {
                            return(
                                <li key={index} className="feature">
                                    <h2>{item.featureName}</h2>
                                    <p>{item.description}</p>
                                    <button className="button">{item.buttonName}</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


