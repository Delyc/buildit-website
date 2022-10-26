import Image from 'next/image'
import build from '../../../public/icons/build.png'
import logo1 from '../../../public/icons/logo1.png'
import logo2 from '../../../public/icons/logo2.png'
import logo3 from '../../../public/icons/logo3.png'
import logo4 from '../../../public/icons/logo4.png'
import logo5 from '../../../public/icons/logo5.png'
import Logos from '../logos'

function Investors(){
    return (
        <>
        <section className='investors'>
            <div className='investors__wrapper'>
  

               <Logos />

                
              <div className='investors__content'>
                <div className='investors__content-image'>
                    <Image className='investors__content-img'  src={build} />
                </div>

                <div className='investors__content-description'>
                    <p className='investors__content-about'>About us</p>
                    <h2 className='investors__content-heading'>Owner and investor with a reputation</h2>
                    <p className='investors__content-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
                    <button className='investors__content-btn bg-gradient2'>Explore</button>
                </div>
              </div>
            
            </div>
        </section>
        </>
    )
}

export default Investors