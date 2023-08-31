import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Sidenav = () => {

//handleNav function toggles state back and forth
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed');
    };

    return (
        <div className='fixed w-full h-screen bg-[url("./assets/cole-patrick-hpCHLFknc2s-unsplash.jpg")] flex flex-col justify-center items-center z-20'>
            <AiOutlineMenu onClick={handleNav} className = 'absolute top-4 right-4 z-[99] md:hidden'/>
            {
                //if our nav state is true- then display html on the screen and if it's not true, we will display some differnt html on the screen
                nav ? (
                    <div>
                        <a href="main">
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                    </div>
                )
                : (
                    <div></div>
                )

            }
        
        </div>
    );
};

export default Sidenav;