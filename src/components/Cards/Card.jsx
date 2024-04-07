import React, { useEffect, useState } from 'react';
import "./Card.css";
import rocket from "../../assets/rocket.gif";
import responsive from "../../assets/responsive.gif";
import social from "../../assets/social-media.gif";
import vlog from "../../assets/vlogger.gif";
import { motion, useAnimation } from "framer-motion";

const Card = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    const items = [
        {
            id: 1,
            title: "Simplified Internships",
            desc: "Explore virtual internships in Web Dev, App Dev, Full Stack, ML, and Data Science; focused learning",
            image: rocket
        },
        {
            id: 2,
            title: "Build your Network",
            desc: "We believe in networking to connect with other interns who are interested in the same things.",
            image: responsive
        },
        {
            id: 3,
            title: "Building Student Trust",
            desc: "We ensure your success and build a trusted platform for valuable learning experiences.",
            image: social
        },
        {
            id: 4,
            title: "Structured Learning",
            desc: "Enjoy growth-oriented internship at Bharat Intern, tailored for maximum skill development.",
            image: vlog
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY;
            const elements = document.querySelectorAll('.four-card');
            elements.forEach((element) => {
                const top = element.offsetTop;
                const height = element.clientHeight;
                if (bottom > top && bottom < top + height) {
                    setIsVisible(true);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start((i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.2,
                    duration: 0.5,
                    
                }
            }));
        }
    }, [isVisible, controls]);

    return (
        <div className='four-card'>
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    className='card'
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    custom={index}
                >
                    <div className='icon'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='card-text'>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Card;
