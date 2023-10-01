import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Main = () => {
    return (
        
        <div id='main'>
            <div className='w-full h-screen relative top-0 left-0 bg-cover bg-[url("./assets/vaporwave_1.jpg")]'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-monoton'>I'm Katie Baldwin</h1>
                    <h2>
                    <TypeAnimation
                        sequence={[
                         // Same substring at the start will only be typed out once, initially
                        "I'm a Web Developer",
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        "I'm a Problem Solver",
                        2000,
                        "I'm a Creative",
                        2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-2 max-w-[200] w-20'>
                        <FaLinkedin className='cursor-pointer' size={20}/>
                        <FaGithub className='cursor-pointer' size={20}/>
                    </div>
                </div>
            
            
            </div>

        </div>
    )
}

export default Main