import React from 'react';
import { ReactTyped } from "react-typed";
import './hero.css'

const TypeEffect = () => {
  return (
        <div>
          <div className='top-heading-typing'>
          <ReactTyped strings={["We are Provide Experience on "]} typeSpeed={0} />
          </div>
      
          <ReactTyped
            strings={[
              "Web Development",
              "Full stack web development",
              "App Development",
              "Machine Learning",
              "Data Science",
              "UI/UX"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
            
            <input type="text" disabled  className='domain-typing'/>
            
          </ReactTyped>
        </div>
  )
}

export default TypeEffect;