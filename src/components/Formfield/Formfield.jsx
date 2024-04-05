import React, { useEffect } from 'react';
import './formfield.css'


const scriptURL = 'https://script.google.com/macros/s/AKfycbxunkRusfgLtqCJeZ4-PvQ1D1xrV7ZslFDoKZmwn7VavxwtTg_XFa1a4BIZa4AgbX3rqg/exec';

const Formfield = () => {
    var msg = document.getElementById("conform-msg");

    useEffect(() => {
        const form = document.forms['submit-to-google-sheet'];

        const submitForm = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                   console.log("Submit Succesfully !")
                })
                .catch(error => console.error('Error!', error.message));
        };

        form.addEventListener('submit', submitForm);

        
        return () => {
            form.removeEventListener('submit', submitForm);
        };

       
    }, []);

    const submitbtn=()=>{
        msg.innerHTML = "Submit Succesfully !";

        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
    }

  

    return (
        <>
            <div className='form-container'>
                <div className='form-heading'>
                    <div className='form-top-heading'>Virtual Internship Program</div>
                    <div className='form-sub-heading'>(April-May Session)</div>
                </div>
                <div className='form-box'>
                    <form name="submit-to-google-sheet">
                        <div className='student-form-heading'>
                            <div className='student-form-top-heading'>Student Details</div>
                            <div className='student-form-title'>Note: Please don't apply many times for the same domain, or your application will be consider as invalid.</div>
                        </div>

                        <div className='input-conatiner'>
                            <div className='input-box'>
                                <div className='input-text'>Email :</div>
                                <input type='email' placeholder='Enter Your Email' name="Email" required />
                            </div>

                            <div className='input-box '>
                                <div className='input-text'>Name :</div>
                                <input type='text' placeholder='Enter Your Name' name='Name' required />
                            </div>

                            <div className='input-box'>
                                <div className='input-text'>Contact No. :</div>
                                <input type='number' placeholder='Enter Phone No.' maxlength="10" name='Phoneno.' required />
                            </div>
                            <div className='input-text'>Year :</div>

                            <div className='input-radio-box'>
                                <div className='radio-btn'>
                                    <input type="radio" id="option1" name="Year" value="1st year" />
                                    <label for="option1">1st Year</label><br />
                                </div>

                                <div className='radio-btn'>
                                    <input type="radio" id="option2" name="Year" value="2nd year" />
                                    <label for="option2">2st Year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option3" name="Year" value="3rd year" />
                                    <label for="option3">3st Year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option4" name="Year" value="4st Year" />
                                    <label for="option4">4th year</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option5" name="Year" value="Passed Out" />
                                    <label for="option5">Passed Out</label><br />
                                </div>
                                <div className='radio-btn'>
                                    <input type="radio" id="option6" name="Year" value="Other" />
                                    <label for="option6">Other..</label><br />
                                </div>
                            </div>

                            <div className='input-box'>
                                <div className='input-text'>College Branch :</div>
                                <input type='text' placeholder='Enter Your Branch' name='College_Branch'/>
                            </div>
                            <div className='input-box'>
                                <div className='input-text'>College Name :</div>
                                <input type='text' placeholder='Enter Your College Name' name='College_Name' />
                            </div>

                            <div className='input-text'>Domain Of Internship :</div>
                            <div className='input-radio-box box'>

                                <div className='radio-btn'>
                                    <input type="radio" id="domain-option1" name="Domain" value="Web Development Basic" />
                                    <label for="domain-option1">Web Development Basic</label><br />
                                </div>

                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option2" name="Domain" value="Full Stack Web Development" />
                                    <label for="domain-option2">Full Stack Web Development</label><br />
                                </div>

                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option3" name="Domain" value="App Development" />
                                    <label for="domain-option3">App Development</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option4" name="Domain" value="Machine Learning" />
                                    <label for="domain-option4">Machine Learning</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option5" name="Domain" value="Data Science" />
                                    <label for="domain-option5">Data Science</label><br />
                                </div>
                                <div className='radio-btn' >
                                    <input type="radio" id="domain-option6" name="Domain" value="UI/UX" />
                                    <label for="domain-option6">UI/UX</label><br />
                                </div>
                            </div>

                            <div className='input-radio-box box'>
                                <div className='input-text'>I have joined the Telegram Group:</div>
                                <div className='radio-btn'>
                                    <input type="radio" id="Join_Telegram-option1" name="Join_Telegram" value="Yes" />
                                    <label for="Join_Telegram-option1">Yes</label>
                                </div>

                                <div className='radio-btn'>
                                    <input type="radio" id="Join_Telegram-option2" name="Join_Telegram" value="No" />
                                    <label for="Join_Telegram-option2">No</label>
                                </div>


                            </div>
                            <div className='submit-btn-box'>
                                <button type='submit' onClick={submitbtn}>Submit</button>
                                <div id="conform-msg">&nbsp;</div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Formfield;

