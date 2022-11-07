import Image from "next/image";
import image1 from "../../public/icons/image1.png";
import image2 from "../../public/icons/image2.png";
import image3 from "../../public/icons/image3.png";
import image4 from "../../public/icons/image4.png";
import image5 from "../../public/icons/image5.png";
import image6 from "../../public/icons/image6.png";
function Social() {
  return (
    <>
      <section className="Social">
        <div className="Social__wrapper  social__wrapper--align">
          <p className="Social__wrapper-head">Social</p>
          <h2 className="Social__wrapper-insta">On Instagram</h2>

          <div className="Social__gallery">
            <Image className="Social__gallery-image" src={image1} />
            <Image className="Social__gallery-image" src={image2} />
            <Image className="Social__gallery-image" src={image3} />
            <Image className="Social__gallery-image" src={image4} />
            <Image className="Social__gallery-image" src={image5} />
            <Image className="Social__gallery-image" src={image6} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Social;
