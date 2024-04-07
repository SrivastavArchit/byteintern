import React from 'react'
import "./preloader.css"
import { motion } from "framer-motion";
const Preloader = () => {
  return (

    <motion.div initial={{y:"0"}} animate={{y:"-100vh"}} transition={{delay:1.6,duration:1.2}} className='loader'>

    <h1>System<span style={{color:"white"}}>.<span style={{color:"#e06c75"}}>out</span>.</span><span style={{color:"#61afef"}}>println</span>("</h1>
<div className="string">
  <h1 className="greeting en">Hello World!</h1>
  <h1 className="greeting es">¡Hola Mundo!</h1>
  <h1 className="greeting de">Hallo Welt!</h1>
  <h1 className="greeting it">Ciao Mondo!</h1>  
</div>
<h1 className="closure">");</h1>
</motion.div>
 

  )
}

export default Preloader
