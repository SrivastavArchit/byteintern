import React from 'react';
import Blank from '../components/Blank/Blank';
import './contactus.css';
import phoneno from '../Icon/phone-fill.png';
import email from '../Icon/mail-line.png';

const Contactpage = () => {
  return (
    <>
      <Blank />
      <div className='contactus-container'>
        <div className='contactus-form'>
          <form>
            <div className='form-heading'>Contact Us</div>
            <div className='name-box inpt-box'>
              <input type='text' placeholder='Enter your name' />
            </div>
            <div className='email-box inpt-box'>
              <input type='email' placeholder='Enter your email' />
            </div>
            <div className='phone-box inpt-box'>
              <input type='number' placeholder='Enter your phone number' />
            </div>

            <div className='textarea-box'>
              <textarea placeholder='Enter your message .....' />
            </div>
            <div className='contactus-submit-btn'>
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>
        <div className='contactus-detail'>
          <div className=' contactus-detail-box'>
            <div className='box-img'>
              <img src={phoneno} />
            </div>
            <div className='box-detail'>
              <span>Phone No. :- </span> 9876543210
            </div>
          </div>

          <div className=' contactus-detail-box'>
            <div className='box-img'>
              <img src={email} />
            </div>
            <div className='box-detail'>
              <span>Email :-</span> xxx@gmail.com
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contactpage