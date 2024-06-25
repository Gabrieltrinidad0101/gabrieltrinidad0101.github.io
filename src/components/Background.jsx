import React from 'react'
import BackgroundCss from "./Background.module.css"

export const Background = () => {
    return (
        <div className={BackgroundCss.area} >
            <ul className={BackgroundCss.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    )
}
