import React from 'react'
import './CreateChatRoom.css'

export default function CreateChatRoom(props) {
    return (props.trigger) ? (
        <div className="pop-up">
            <form action="" className="popup-inner">
                <input type="text" />
                <button>Enter</button>
            </form>
        </div>
    ) : "";
}
