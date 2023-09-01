import React from 'react'
import KbLogo from "../assets/kb-logo.png"

const Main = () => {
    return (
        <div id='main'>
            <div className = 'flex justify-center items center pt-20'>
            <img className='h-96 w-96 rounded-full relative z-[999] items-center' src={KbLogo}
            alt= "KB Logo" />
            </div>
        </div>
    )
}

export default Main