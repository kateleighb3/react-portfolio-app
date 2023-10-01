import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:pl-20 p-4 bg-cover bg-[url("./assets/vaporwave_2.jpg")] py-16'>
             <h1 className='text-4xl font-bold text-center font-fascinate mb-8'>About</h1>
            <div className = 'border-2 border-indigo-600 ml-10 mr-12 bg-indigo-600 bg-opacity-70 rounded-md font-bold shadow-lg shadow-indigo-500/50'>
            <p className = 'text-2xl my-4'> 
            Hey! I'm Katie and I'm a web developer. I love web development because I love being creative, solving problems, solving puzzles, and taking on challenges.
            <br/>
            <br/>
            For that reason, I've built innovative projects such as Zero Proof- a community-driven app that unites non-alcoholic enthusiasts where they can discover nearby non-alcoholic bars and lounges, share their favorite mocktail recipes, and provide reviews of the latest non-alcoholic beers and spirits. 
            <br/>
            <br/>
            Right now I am working on building other projects, eager to learn and apply new skills and continue on this awesome journey.
            <br/>
            <br/>
            I'm a big fan of hiking, climbing, mountain biking, anything outdoors really, going on adventures with my wife and our kids, and playing board games. 
            </p>
                </div>
        </div>
    );
};

export default About