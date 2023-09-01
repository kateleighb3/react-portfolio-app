import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
import {GrProjects, GrContactInfo} from 'react-icons/gr'
import { SiAboutdotme } from "react-icons/si"
import { IoNewspaper } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const Sidenav = () => {

//handleNav function toggles state back and forth
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed');
    };

    return (
        <div className='fixed w-full h-screen bg-cover bg-[url("./assets/vaporwave_1.jpg")] flex flex-col justify-center items-center z-[20]'>
            <AiOutlineMenu onClick={handleNav} className = 'absolute top-4 right-4 z-[99] bg-yellow-400 rounded-half md:hidden'/>
            {
                //if our nav state is true- then display html on the screen and if it's not true, we will display some differnt html on the screen
                nav ? (
                    <div className='font-fascinate'>
                        <a href="#main" className='w-{75%} flex justify-center items-center rounded-full bg-yellow-400 shadow-lg shadow-indigo-500/50 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>

                        <a href="#about" className='w-{75%} flex justify-center items-center rounded-full bg-yellow-400 shadow-lg shadow-indigo-500/50 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <SiAboutdotme size={20} />
                            <span className='pl-4'>About</span>
                        </a>

                        <a href="#projects" className='w-{75%} flex justify-center items-center rounded-full bg-yellow-400 shadow-lg shadow-indigo-500/50 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>

                        <a href="#resume" className='w-{75%} flex justify-center items-center rounded-full bg-yellow-400 shadow-lg shadow-indigo-500/50 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <IoNewspaper size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>

                        <a href="#contact" className='w-{75%} flex justify-center items-center rounded-full bg-yellow-400 shadow-lg shadow-indigo-500/50 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaRegEnvelope size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                )
                : (
                    <div>
                    </div>
                )

            }
            <div className='md:block hidden fixed top-[5%] z-10 p-4'>
                <div className='flex flex-row font-fascinate'> 
                    <a href='#main' className='p-2 m-3 bg-yellow-400 rounded-full shadow-lg shadow-indigo-500/50 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <span>Home</span>
                    </a>

                    <a href='#about' className='p-2 m-3 bg-yellow-400 rounded-full shadow-lg shadow-indigo-500/50 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <span>About</span>
                    </a>

                    <a href='#projects' className='p-2 m-3 bg-yellow-400 rounded-full shadow-lg shadow-indigo-500/50 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <span>Projects</span>
                    </a>

                    <a href='#resume' className='p-2 m-3 bg-yellow-400 rounded-full shadow-lg shadow-indigo-500/50 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <span>Resume</span>
                    </a>

                    <a href='#contact' className='p-2 m-3 bg-yellow-400 rounded-full shadow-lg shadow-indigo-500/50 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        
        </div>
    );
};

export default Sidenav;