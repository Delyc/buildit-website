
import Image from 'next/image'
import listing from '../../../../public/icons/listing.png'
function Innovation(){
    return (
        <>
        <section className='innovation'>
            <div className='innovation__wrapper'>
                <h2 className='innovation__heading'> Innovative Execution</h2>
                <div className='innovation__list'>
                    <div className='test'>
                    <article className='innovation__single'>
                        <div className='innovation__single-icon'>
                            <Image src={listing}  width="20px"
                              height="20px" />
                            </div>
                            <h3 className='innovation__name'>Featured Listing</h3>
                            <p className='innovation__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                       
                    </article>

                    <article className='innovation__single'>
                        <div className='innovation__single-icon'>
                            <Image src={listing}  width="20px"
                              height="20px" />
                            </div>
                            <h3 className='innovation__name'>Featured Listing</h3>
                            <p className='innovation__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                       
                    </article>

                    <article className='innovation__single'>
                        <div className='innovation__single-icon'>
                            <Image src={listing}  width="20px"
                              height="20px" />
                            </div>
                            <h3 className='innovation__name'>Featured Listing</h3>
                            <p className='innovation__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                       
                    </article>
                </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Innovation