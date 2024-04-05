import React from 'react'
// npm i grapheme-splitter
import { TypeAnimation } from 'react-type-animation';
import heroimg from "../../assets/heroimg.gif"
import boy from "../../assets/boy.svg"
import desk from "../../assets/desk.svg"
import floor from "../../assets/floor.svg"
import { motion } from "framer-motion";

import "./hero.css"
const Hero = () => {

    return (
        <>
            <div className='hero_section'>
                <div className='left-hero'>
                    <div className='text-group'>


                        <TypeAnimation className='hero-text'
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'We produce food for Mice',
                                1000,
                                'We produce food for  Hamsters',
                                1000,
                                'We produce food for Guinea Pigs',
                                1000,
                                'We produce food for Chinchillas',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em', fontFamily: 'sans-serif', fontWeight: "600", color: "#5D5D5D" }}
                            repeat={Infinity}
                        />

                        <div className='left-text-part2'>
                            <h3> Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</h3>
                        </div>

                    </div>


                </div>
                <div className='right-hero'>
                    {/* <img className='hero-img' src={heroimg} alt="" /> */}
                    <motion.span className='span1'><motion.img initial={{ y: "100%" }} transition={{ duration: 1.3 }} animate={{ y: 0 }} src={boy} alt="" /></motion.span>

                    <span className='span2'><motion.img initial={{ x: "100%" }} transition={{ duration: 1.4 }} animate={{ x: "0", animationDuration: "2sec", opacity: 1.2 }} src={desk} alt="" /></span>
                    <span className='span3'><motion.img initial={{ y: "100%" }} transition={{ duration: 1.2 }} animate={{ y: 0 }} src={floor} alt="" /></span>

                </div>
               
            </div>
        </>
    )
}

export default Hero
