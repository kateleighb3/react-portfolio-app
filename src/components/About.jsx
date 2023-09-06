import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:pl-20 p-4 bg-cover bg-[url("./assets/vaporwave_2.jpg")] py-16'>
             <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>About</h1>
            <div className = 'border-2 border-indigo-600 ml-10 mr-12 bg-indigo-600 bg-opacity-70 rounded-md font-bold shadow-lg shadow-indigo-500/50'>
            <p className = 'my-4'> 
                Hello there! I'm Katie, and I am a passionate individual who finds solace and joy in the 
                great outdoors. I thrive on the exhilaration of climbing to new heights, exploring trails, and getting that rush of adventure while exploring the outdoors.
                Nature is my sanctuary, and it brings me peace and endless inspiration. However, my love for the outdoors is not limited 
                to adventure alone. Sharing those outdoor moments with my family – they're my rock, and being in nature with them is the best.
            </p>
    
            <p className ='my-4'>
                On the professional side, I work my magic as a Paintless Dent Repair technician. 
                I take pride in restoring vehicles to their original glory – it's all about precision and bringing back that 
                flawless look.
            </p>
                
            <p className='my-4'>
                Life, to me, is all about learning and growing. Challenges? Bring them on! I thrive on puzzles and problem-solving. 
                That's why I find myself naturally gravitating towards web development. The way I see it, 
                being a web developer is like tackling a new puzzle every day. It takes resilience, determination, and that 
                eagerness to overcome obstacles. That's totally my jam.
            </p>
                
            <p className='my-4'>
                So there you have it – an outdoor enthusiast, a dent magician, a mentor, and a puzzle-loving problem solver. 
                That's me, Katie, embracing every twist and turn that life throws my way while cherishing the beauty of the 
                world around me.
                </p>
                </div>
        </div>
    );
};

export default About