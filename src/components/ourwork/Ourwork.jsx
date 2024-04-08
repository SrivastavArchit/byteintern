import React from 'react'
import "./Ourwork.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react'; 
gsap.registerPlugin(ScrollTrigger);
const Ourwork = () => {
    useEffect(() => {
        // GSAP timeline
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "50% 50%",
            end: "300% 50%",
           
            pin:true,
            scrub: 1
          }
        });
    
        // Animation for ".our-work-txt-div" element
        tl.to(".our-work-txt-div", {
          height: "60vh",
          duration: 1
        },"height");
    
        // Animation for ".ourwork-txt" element
        tl.to(".ourwork-txt", {
          height: "60vh",
          duration: 1
        },"height");
        tl.to("#our", {
            left: "0%",
            duration: 1
          },"height");
          tl.to("#work", {
            right: "0%",
            duration: 1
          },"height");
          tl.to(".img-scroll", {
            marginTop: "-200%",
            duration: 1
          });
      }, []);
  return (
    
    <div>
       <div className="work-section">
        <div className="ourwork-txt">
            <div id="our">
                <h1>OUR</h1>
            </div>
            <div id="work">
                <h1>WORK</h1>
            </div>
        </div>
        <div className="our-work-txt-div">
            <div className="scroll-work">
                <div className="img-scroll">
                  
                    <img src="https://media.istockphoto.com/id/95442265/photo/lottery.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=jTrMLiaV5Tc_cNUtkBjyW-SetgXmep_ce21RzenkdTA=" alt=""/>
                    <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt=""/>
                    <img src="https://media.istockphoto.com/id/95442265/photo/lottery.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=jTrMLiaV5Tc_cNUtkBjyW-SetgXmep_ce21RzenkdTA=" alt=""/>
<img src="https://img.freepik.com/premium-photo/young-girl-holding-film-camera-with-beautiful-zinnia-blooming-field-background-vacation-time_26077-225.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>

   
    </div>
  )
}

export default Ourwork
