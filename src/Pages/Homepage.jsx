import React from 'react'
import Blank from '../components/Blank/Blank';
import Hero from '../components/Hero/Hero';
import Card from '../components/Cards/Card';
import Techstack from '../components/techstack/Techstack';
import TextReveal from '../components/TextReveal';
import Ourwork from '../components/ourwork/Ourwork';
import Footer from '../components/Footer/Footer';


const trial_height={
    height:"100vh",
    backgroundColor:"white"
}

const Homepage = () => {
    return (
        <>
            <div className='wrapper'>
                <Blank />
                <Hero />
                <Card />
                <Techstack />
                <TextReveal />
               
                <Ourwork/>
               
                {/* <div className='trial-height' style={trial_height}></div> */}

                <Footer/>
            </div>
        </>
    )
}

export default Homepage;