import React from 'react'

export default function Home(props) {
    return (
        <>            
            <section style={{display: "flex"}}>
                <h1>Hello, {props.name}</h1>
                <div style={{display: "flex", alignItems: "center", justifyContent: "right"}}>
                    <table style={{margin: "20px"}}>
                        <tr>
                            <td style={{padding : "50px", paddingTop: "0px"}}>
                                <h2>Create Chat Room</h2>
                                <p>Create Your own Chat</p>
                                <button>Create</button>
                            </td>
                            <td style={{padding : "50px", paddingTop: "0px"}}>
                                <h2>Create Meeting</h2>
                                <p>Create Your own Meet</p>
                                <button>Create</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding: "50px", paddingTop: "0px"}}>
                                <h2>Join Meeting</h2>
                                <p>Join a meet though Meet ID</p>
                                <input type="text" />
                                <button>Join</button>
                            </td>
                            <td style={{padding : "50px", paddingTop: "0px"}}>
                                <h2>Schedule Meeting</h2>
                                <p>Schedule through Google Calender</p>
                                <button>Schedule</button>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </section>
            
        </>
    )
}


