import React from 'react'

import buttonStyle from '../styles/button.scss'

function Button(props) {
    console.log(props.className)
    console.log(buttonStyle)
    return (
        <div>
            <button className={buttonStyle[props.className]}>{props.text}</button>
        </div>
    )
}

export default function Buttons() {
    return (
        <div>
            <Button className="button1" text="btn1" />
            <Button className="button2" text="btn2" />
            <Button className="button3" text="btn3" />
        </div>
    )
}