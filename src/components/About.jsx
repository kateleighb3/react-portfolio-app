import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:pl-20 p-4 bg-cover bg-[url("./assets/vaporwave_2.jpg")] py-16'>
             <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>About</h1>
            <div className = 'border-2 border-indigo-600 ml-10 mr-12 bg-indigo-600 bg-opacity-70 rounded-md font-bold shadow-lg shadow-indigo-500/50'>
            <p className = 'my-4'> 
            Hey, I'm Katie Baldwin. I'm a developer based in Orlando, FL. I love nature, burritos, and coding.
            </p>
                </div>
        </div>
    );
};

export default About