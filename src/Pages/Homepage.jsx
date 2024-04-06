import React from 'react'
import Blank from '../components/Blank/Blank';
import Hero from '../components/Hero/Hero';
import Card from '../components/Cards/Card';
import Techstack from '../components/techstack/Techstack';


const Homepage = () => {
    return (
        <>
            <div className='wrapper'>
                <Blank />
                <Hero/>
                <Card/>
                <Techstack/>
          
            </div>
        </>
    )
}

export default Homepage;