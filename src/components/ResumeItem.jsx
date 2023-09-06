import React from 'react'

const ResumeItem = ({year, title, company, details}) => {
    return(
        <ol className='flex flex-col md:flex-row relative border-l border-rose-900'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-rose-900 rounded-full mt-1.5 -left-1.5'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-bold text-orange-500 bg-purple-950 rounded-md'>{year}</span>
                    <span className='font-bold text-lg'>{company}</span>
                    <span className='font-semibold text-lg italic'>{title}</span>
                </p>
                <p className='my-2 font-normal'>{details}</p>
            </li>
        </ol>
        
    );
};

export default ResumeItem