import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FeatureList } from './FeatureList'
import './Home.css'
import Button from './Button'
import CreateChatRoom from './PopUps/CreateChatRoom/CreateChatRoom'
import Background from '../Background/Background'

export default function Home(props) {

    const [CreateCR, setCreateCR] = useState(false)

    return (
        <>
        <Background/>
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
                                    <Button className={item.cName} onClick={() => {console.log("hello"); setCreateCR(true);}} buttonName={item.buttonName} />
                                </li>
                            )
                        })}
                        <CreateChatRoom trigger={CreateCR} />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


