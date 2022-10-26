import call from '../../../public/icons/call.png'
import email from '../../../public/icons/email.png'
import Image from 'next/image'
function Contact(){
    return (
        <>
        <section className="contact">
           <div className="contact__wrapper">
            <div className='contact__wrapper-contacting'>
                <div>
                <p className='contact__wrapper-header'>Contact</p>
                <h2 className='contact__wrapper-intouch'>Get In Touch</h2>
                </div>
                <div className='contact__wrapper-contacting'>
                <div className='contact__wrapper-onecontact'>
                        <div className='contact__wrapper-icon-container'>
                            <Image  src={call}
                              alt="call"
                              width="20px"
                              height="20px"
                              />
                        </div>
                        
                        <div className='contact__phone'>
                            <p className ="contact__phone-text">Tel <br  /> <span className="contact__phone-nbr"> 708-790-0000</span> </p>
                        </div>
                    </div>

                    <div className='contact__wrapper-onecontact'>
                        <div className='contact__wrapper-icon-container'>
                            <Image  src={email}
                              alt="call"
                              width="20px"
                              height="20px"
                              />
                        </div>
                        
                        <div className='contact__phone'>
                            <p className ="contact__phone-text">Email <br  /> <span className="contact__phone-nbr"> sales@buildit.site</span> </p>
                        </div>
                    </div>

                    <div className='contact__wrapper-onecontact'>
                        <div className='contact__wrapper-icon-container'>
                            <Image  src={email}
                              alt="call"
                              width="20px"
                              height="20px"
                              />
                        </div>
                        
                        <div className='contact__phone'>
                            <p className ="contact__phone-text">Tel <br  /> <span className="contact__phone-nbr"> 60 Manor Station St.
<br />Fairport, NY 14450</span> </p>
                        </div>
                    </div>

                    
                </div>

            </div>

            <div className='contact__wrapper-form-section'>
            <form className='contact__wrapper-form' action="/send-data-here" method="post">
                <div className='contact__wrapper-combined-input'>
                    <div className='contact__wrapper-one-input'>
                    <label  className='contact__wrapper-label' for="first">First name:</label>
                <input className='contact__wrapper-input' type="text" id="first" name="first" />
                    </div>
                    <div className='contact__wrapper-one-input'>
                    <label  className='contact__wrapper-label' for="first">First name:</label>
                <input className='contact__wrapper-input' type="text" id="first" name="first" />
                    </div>
              
                </div>

                <div className='contact__wrapper-one-input'>
                    <label className='contact__wrapper-label' for="first">First name:</label>
                <input className='contact__wrapper-input' type="text" id="first" name="first" />
                    </div>
                    <div className='contact__wrapper-one-input'>
                    <label  className='contact__wrapper-label' for="first">First name:</label>
                <textarea row={10} className="contact__wrapper-textarea contact__wrapper-textarea--height"></textarea>
                    </div>
                
                <button className='contact__wrapper-btn' type="submit">Submit</button>
            </form>

            </div>
           </div>

        </section>
       </>
    )
}

export default Contact