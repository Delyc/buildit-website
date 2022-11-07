import Image from 'next/image'
import build from '../../public/icons/build.png'
import LogosContainer from '../LogosContainer'
function Investor(){
    return (
        <>
        <section className='Investor'>
            <div className='Investor__wrapper'>
  

               <LogosContainer />

                
              <div className='Investor__content'>
                <div className='Investor__content-image'>
                    <Image className='Investor__content-img'  src={build} />
                </div>

                <div className='Investor__content-description'>
                    <p className='Investor__content-about'>About us</p>
                    <h2 className='Investor__content-heading'>Owner and investor with a reputation</h2>
                    <p className='Investor__content-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
                    <button className='Investor__content-btn bg-gradient2'>Explore</button>
                </div>
              </div>
            
            </div>
        </section>
        </>
    )
}

export default Investor