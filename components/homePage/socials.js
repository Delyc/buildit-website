import Image from 'next/image'
import image1 from '../../public/icons/image1.png'
import image2 from '../../public/icons/image2.png'
import image3 from '../../public/icons/image3.png'
import image4 from '../../public/icons/image4.png'
import image5 from '../../public/icons/image5.png'
import image6 from '../../public/icons/image6.png'
function Socials(){
    return (
        <>

        <section className='socials'>
            <div className='socials__wrapper  social__wrapper--align'>
                     <p className='socials__wrapper-head'>Socials</p>
                     <h2 className='socials__wrapper-insta'>On Instagram</h2>

                <div className='socials__gallery'>
                    <Image className='socials__gallery-image' src={image1} />
                    <Image className='socials__gallery-image' src={image2} />
                    <Image className='socials__gallery-image' src={image3} />
                    <Image className='socials__gallery-image' src={image4} />
                    <Image className='socials__gallery-image' src={image5} />
                    <Image className='socials__gallery-image' src={image6} />
                </div>
            </div>
        </section>
        </>
    )
}

export default Socials