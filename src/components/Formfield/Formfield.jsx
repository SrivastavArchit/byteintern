import React from 'react';
import './formfield.css'
import Blank from '../Blank/Blank';


const Formfield = () => {
    return (
        <>
            <div className='form-container'>
                <div className='form-heading'>
                    <div className='form-top-heading'>Virtual Internship Program</div>
                    <div className='form-sub-heading'>(April-May Session)</div>
                </div>
                <div className='form-box'>
                    <form>
                        <div className='student-form-heading'>
                            <div className='student-form-top-heading'>Student Details</div>
                            <div className='student-form-title'>Note: Please don't apply many times for the same domain, or your application will be consider as invalid.</div>
                        </div>

                        <div className='input-conatiner'>
                            <div className='input-box'>
                                <div className='input-text'>Email :</div>
                                <input type='email' placeholder='Enter Your Email' required />
                            </div>

                            <div className='input-box '>
                                <div className='input-text'>Name :</div>
                                <input type='text' placeholder='Enter Your Name' required />
                            </div>

                            <div className='input-box'>
                                <div className='input-text'>Contact No. :</div>
                                <input type='number' placeholder='Enter Phone No.' maxlength="10" required />
                            </div>
                            <div className='input-text'>Year :</div>

                            <div className='input-radio-box'>
                                <div className='radio-btn'>
                                    <input type="radio" id="option1" name="options" value="year-option1" />
                                    <label for="option1">1st Year</label><br />
                                </div>

                                <div className='radio-btn'>
                                    <input type="radio" id="option2" name="options" value="year-option2" />
                                    <label for="option2">2st Year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option3" name="options" value="year-option3" />
                                    <label for="option3">3st Year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option4" name="options" value="year-option4" />
                                    <label for="option4">4st Year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option5" name="options" value="year-option5" />
                                    <label for="option5">Passed Out</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option6" name="options" value="year-option6" />
                                    <label for="option6">Other..</label><br />
                                </div>
                            </div>

                            <div className='input-box'>
                                <div className='input-text'>College Branch :</div>
                                <input type='text' placeholder='Enter Your Branch' />
                            </div>
                            <div className='input-box'>
                                <div className='input-text'>College Name :</div>
                                <input type='text' placeholder='Enter Your College Name' />
                            </div>

                            <div className='input-text'>Domain Of Internship :</div>
                            <div className='input-radio-box box'>

                                <div className='radio-btn'>
                                    <input type="radio" id="domain-option1" name="domain-options" value="domain-option1" />
                                    <label for="domain-option1">Web Development Basic</label><br />
                                </div>

                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option2" name="domain-options" value="domain-option2" />
                                    <label for="domain-option2">Full Stack Web Development</label><br />
                                </div>

                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option3" name="domain-options" value="domain-option3" />
                                    <label for="domain-option3">App Development</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="option4" name="domain-options" value="domain-option4" />
                                    <label for="domain-option4">Machine Learning</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option5" name="domain-options" value="domain-option5" />
                                    <label for="domain-option5">Data Science</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option6" name="domain-options" value="domain-option6" />
                                    <label for="domain-option6">UI/UX</label><br />
                                </div>
                            </div>

                            <div className='input-radio-box box'>
                                <div className='input-text'>I have joined the Telegram Group:</div>
                                <div className='radio-btn'>
                                    <input type="radio" id="domain-option1" name="domain-options" value="domain-option1" />
                                    <label for="domain-option1">Yes</label>
                                </div>

                                <div className='radio-btn'>
                                    <input type="radio" id="domain-option1" name="domain-options" value="domain-option1" />
                                    <label for="domain-option2">No</label>
                                </div>


                            </div>
                            <div className='submit-btn-box'>
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Formfield