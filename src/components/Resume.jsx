import React from 'react'
import ResumeItem from './ResumeItem'

const data = [
    {
        year: 2023,
        company: 'UCF Web Development Boot Camp',
        title: 'Student',
        details:'Full-stack web development, TDD, BDD, OOP, Pair Programming, Team Projects, Agile development JavaScript, HTML, CSS, MySQL, jQuery, Bootstrap, Node.js, API, MVC, MongoDB, Express.js,  XCode, Git, React.js',
    },
    
    {
        year: 2022,
        company: 'Good Vibrations Dent Repair',
        title: 'PDR Technician',
        details: 'Assess and evaluate vehicles dent damage, utilizing specialized tools and techniques for effective dent removal. Collaborate with body shop personnel to coordinate repairs and ensure timely dent removal. Produce exceptional results, enhancing the appearance and value of vehicles. Maintain a high level of attention to detail for a flawless repair finish.',
    },

    {
        year: 2021,
        company: 'Dent Wizard International',
        title: 'PDR Technician',
        details: 'Assessed damage on cars at dealerships and auctions, priced accordingly; and with the use of many specialized tools and techniques, worked the dents out and massaged the metal back to its original condition. Worked on vehicles with various damage, including collision damage and hail. Ensured customers including clients and managers were satisfied and happy with the end-product.',
    },

    {
        year: 2018,
        company: 'Austin Bouldering Project',
        title: 'Strength Coach',
        details: 'Coached, created, and led fitness programs for members in group fitness classes at a bouldering gym. Designed periodized strength training programs for climbers. Created and oversaw strength program for upcoming climbing competitions.',
    }
]
const Resume = () => {
    return (
    <div id='resume' className='w-full md:pl-20 p-4 py-16 bg-orange-500'>
       <h1 className='text-4xl font-bold text-center text-black font-fascinate mb-4'>Resume</h1>
       {data.map((item, idx) => (
        <ResumeItem
            key={idx}
            year={item.year}
            company={item.company}
            title={item.title}
            details={item.details}
        />
       ))}
        </div>
    )
}

export default Resume