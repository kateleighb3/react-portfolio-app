import React from 'react'
import ProjectItem from './ProjectItem'
import ironman from '../assets/ironman.jpg'
import quest from '../assets/an-app-called-quest.jpg'

const Projects = () => {
    return (
        <div id='projects' className='w-full md:pl-20 p-4 bg-rose-900 py-16'>
             <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>Projects</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={ironman} title='The Comic Vault'/>
                <ProjectItem img={quest} title='An App Called Quest'/>

            </div>

        </div>
    );
};

export default Projects