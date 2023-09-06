import React from 'react'
import ProjectItem from './ProjectItem'
import ironman from '../assets/ironman.jpg'
import quest from '../assets/an-app-called-quest.jpg'

const Projects = () => {
    return (
        <div id='projects' className='w-full md:pl-20 p-4 bg-rose-900 py-16'>
             <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>Projects</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href='https://sienkc.github.io/The_Comic_Vault/'><ProjectItem img={ironman} title='The Comic Vault' tech='HTML/CSS/Javascript'/></a>
                <a href='https://shrouded-springs-93967-4ef63984c8fc.herokuapp.com/'><ProjectItem img={quest} title='An App Called Quest' tech='Node/MySQL' a href='https://sienkc.github.io/The_Comic_Vault/'/></a>
            </div>

        </div>
    );
};

export default Projects