import Image from 'next/image'
import staff1 from '../../public/icons/staff1.png'
import staff2 from '../../public/icons/staff2.png'
import staff3 from '../../public/icons/staff3.png'
import staff4 from '../../public/icons/staff4.png'
import staff5 from '../../public/icons/staff5.png'
import staff6 from '../../public/icons/staff6.png'
import staff7 from '../../public/icons/staff7.png'
import staff8 from '../../public/icons/staff8.png'
import staff9 from '../../public/icons/staff9.png'




function Team (){
    return (
        <>


        
        
        <section className='team'>
            
      

            <div className='socials__wrapper  social__wrapper--align team__wrapper  team__wrapper--align'>
                     <p className='team__wrapper-head'>Our team</p>
                     <h2 className='team__wrapper-meet'>Let’s meet</h2>

                <div className='team__gallery'>
                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff1} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>
                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff2} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff3} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff4} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff5} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff6} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff7} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff8} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>

                    <div className='team__gallery-member'>
                    <Image className='socials__gallery-image' src={staff9} />
                    <div className='team__member-details'>
                        <p className='team__member-name'>Name Surname</p>
                        <p className='team__member-surname'>Name Surname</p>
                    </div>

                    </div>
                    
                    
                </div>
            </div>
        </section>
            </>
    )
}

export default Team