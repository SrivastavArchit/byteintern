import React from 'react'
import "./Card.css"
import rocket from "../../assets/rocket.gif"
import responsive from "../../assets/responsive.gif"
import social from "../../assets/social-media.gif"
import vlog from "../../assets/vlogger.gif"
const Card = () => {
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
    const Card = ({ title, desc, image }) => (
        <div className='card' >
            <div className='icon'>
                <img src={image} alt="" />
            </div>
            <div className='card-text'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );

    return (
        <div className='four-card' >
            {items.map(item => (
                <Card key={item.id} title={item.title} desc={item.desc} image={item.image} />
            ))}
        </div>


    )
}

export default Card
