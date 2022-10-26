import fb from '../../../public/icons/fb.png'
import insta from '../../../public/icons/insta.png'
import Image from 'next/image'
function Footer(){
    return <>
{/* 
    <section>
        <form className="w-1/2">
            <div className="flex justify-between gap-2">
            <input type="text" className="border=[#486A6F] bg-red-500" />
            <input type="text" className="border=[#486A6F] bg-red-500" />

            </div>
            <input type="text" className="border=[#486A6F] bg-red-500" />
            <textarea ></textarea>
         
        </form>
    </section> */}
    
    <section className="footer ">

        <div className="footer__wrapper ">
            
        <div className="footer__grouped">

            <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl">Buildit</h3>
            <p>Development company, 2022</p>
            </div>
            
            <p>Site design – ⏰ Alarm</p>
        </div>
        <div className="footer__links">
            <p className='footer__links-link'>Service 1</p>
            <p className='footer__links-link'>Service 1</p>
            <p className='footer__links-link'>Service 1</p>
            <p className='footer__links-link'>Service 1</p>
            <div className='footer__socials '>
                <div className='footer__socials-icon'>     <Image src={fb} /></div>
                <div className='footer__socials-icon'>     <Image src={insta} /></div>
           
                
            </div>
        </div>
        <div className="footer__links">
            <p className='footer__links-link'>About </p>
            <p className='footer__links-link'>Services</p>
            <p className='footer__links-link'>Projects</p>
            <p className='footer__links-link'>Contact</p>
        </div>
        <div className='footer__grouped'>

            <div className='flex flex-col gap-2'>
            <p>Get in touch</p>
            <p>60 Manor Station St. Fairport, <br /> NY 14450</p>
            </div>
            
            <p>708-790-0000 <br /> sales@buildit.site</p>
            
        </div>
        
        </div>
    </section>
    </>
}

export default Footer