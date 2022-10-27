import Image from 'next/image'

import logo1 from '../public/icons/logo1.png'
import logo2 from '../public/icons/logo2.png'
import logo3 from '../public/icons/logo3.png'
import logo4 from '../public/icons/logo4.png'
import logo5 from '../public/icons/logo5.png'


function Logos(){
    return (
        <>
                             <div className='logo-line'></div>
                <div className='logos'>
                    <Image width="25px"   height="10x" src={logo1} />
                    <Image width="65px"   height="35px" src={logo2} />
                    <Image width="100px"   height="35px" src={logo3} />
                    <Image width="65px"   height="35px" src={logo4} />
                    <Image width="65px"   height="35px" src={logo5} />

                </div>

                <div className='logo-line'></div>

               
        </>
    )
}

export default Logos