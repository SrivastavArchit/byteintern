import React from 'react'
import Blank from '../components/Blank/Blank';
import Hero from '../components/Hero/Hero';
import Card from '../components/Cards/Card';
import Techstack from '../components/techstack/Techstack';
import TextReveal from '../components/TextReveal';


const Homepage = () => {
    return (
        <>
            <div className='wrapper'>
                <Blank />
                <Hero/>
                <Card/>
                <Techstack/>
          <TextReveal/>
            </div>
        </>
    )
}

export default Homepage;