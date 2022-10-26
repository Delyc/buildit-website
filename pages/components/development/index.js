import Image from 'next/image'
import twoh from '../../../public/icons/200.png'
import sev from '../../../public/icons/70.png'
import tew from '../../../public/icons/20.png'
import Logos from '../logos'

function Development(){
    return (
        <>
        <section class="development  ">
            <p className='development__paragraph'>Statistics</p>
            <h2 className='development__heading'>Development in numbers</h2>
            <div className="development__wrapper development__wrapper--align">
                
        <div class="development__grid ">
  <div className="develpment__group ">
    <div className="development__group-icon">
        <Image src={twoh} width="20px" height="23px"/>
    </div>
    <div className="development__values">
        <h2 className='development__values-nbr'> 200</h2>
        <p className='development__text'>Number</p>

    </div>
    
   </div>

   <div className="develpment__group ">
    <div className="development__group-icon">
        <Image src={sev} width="20px" height="23px"/>
    </div>
    <div className="development__values">
        <h2 className='development__values-nbr'> 70</h2>
        <p className='development__text'>Number</p>

    </div>
    
   </div>

   <div className="develpment__group ">
    <div className="development__group-icon">
        <Image src={tew} width="20px" height="23px"/>
    </div>
    <div className="development__values">
        <h2 className='development__values-nbr'> 20</h2>
        <p className='development__text'>Number</p>

    </div>
    
   </div>
  
</div>
<Logos />





</div>
        </section>
        </>
    )
}

export default Development