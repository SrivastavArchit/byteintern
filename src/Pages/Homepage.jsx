import React from 'react'
import Blank from '../components/Blank/Blank';
import Hero from '../components/Hero/Hero';
import Card from '../components/Cards/Card';

const Homepage = () => {
    return (
        <>
            <div className='wrapper'>
                <Blank />
                <Hero/>
                <Card/>
            </div>
        </>
    )
}

export default Homepage;