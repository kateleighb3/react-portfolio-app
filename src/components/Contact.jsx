import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full md:pl-20 p-4 bg-cover bg-[url("./assets/tropical_night.jpg")] py-16'>
        <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>Contact</h1>

        <div className='flex flex-row justify-center max-w-[1000px] w-full border-2 border-indigo-600 bg-purple-600 bg-opacity-50 font-bold text-xl shadow-lg shadow-indigo-500/50'>
                        <p className='m-10'>310-740-1440</p>
                        <p className='m-10'>kbaldw3@gmail.com</p>
                        <a href='https://github.com/kateleighb3'><p className='m-10 cursor-pointer'>My Github</p></a>
                    </div>
        </div>
    );
};

export default Contact