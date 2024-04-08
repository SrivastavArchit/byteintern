import React from 'react';
import './footer.css';
import facebookImg from '../../Icon/facebook-circle-fill.png';
import instagramImg from '../../Icon/instagram-line.png';
import whatsappImg from '../../Icon/whatsapp-line.png';
import twitterImg from '../../Icon/twitter-x-line.png';


const Footer = () => {
    return (
        <>
            <div className='foter-container'>
                <div className='footer-left-container'>
                    <div className='foter-logo'>
                        logo
                    </div>
                    <div className='footer-vertical-line'></div>
                    <div className='footer-horizontal-line'></div>
                    <div className='foter-navigtion-bar'>
                        <div className='footer-nav-top-box'>
                            <div className='footer-nav-link'>
                                Home
                            </div>
                            <div className='footer-nav-link'>
                                About
                            </div>
                            <div className='footer-nav-link'>
                                contact
                            </div>
                        </div>
                        <div className='footer-copyright-text'>
                            © 2024 xxxxx. All right resrved
                        </div>
                    </div>
                </div>

                <div className='footer-right-container'>
                    <div className='footer-social-media-icon'>
                        <img src={facebookImg} />
                        <img src={instagramImg} />
                        <img src={twitterImg} />
                        <img src={whatsappImg} />
                    </div>
                    <div className='footer-contact-detail'>
                     xxx@gmail.com
                    </div>
                    <div className='footer-copyright-text-responsive'>
                        © 2024 xxxxx. All right resrved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer