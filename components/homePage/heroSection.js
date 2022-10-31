

import house3 from "../../public/icons/house3.jpg";
import herobg from "../../public/icons/herobg.png";
import Header from "../header";


function HeroSection() {
  return (
    <>
      <section className="hero-section gradient1 ">
        <img className="hero-section__bg-image" src={herobg.src} />
        <div className="hero-section__wrapper">
            <Header />

            <div className="flex justify-between items-center pb-24 gap-10 w-full">
          <div className="hero-section__info">
            <div className="hero-section__info-texts">
              <h1 className="hero-section__info-heading ">
                Development company
              </h1>
              <h4 className="hero-section__info-description">
                Forward-thinking real estate developer, owner and investor with
                a reputation
              </h4>
            </div>
            <div className="hero-section__info-btn">
              <button className="hero-section__info-services">Services</button>
              <button className="hero-section__info-about">
                About the Company
              </button>
            </div>
          </div>

          <div className=" z-10 flex justify-end">
          <div className="hero-section__gallery grid grid-rows-2 gap-5 w-5/6">
            <div className="grid grid-cols-3 gap-x-5 items-baseline">
              <img
                className="w-[160px] h-[176px] object-cover ml-auto mt-auto"
                src={house3.src}
              />
              <img
                className="w-[249.46px] h-[248.33px] object-cover mt-auto"
                src={house3.src}
              />
              <img
                className="w-[128.69px] h-[128.11px] object-cover mt-auto"
                src={house3.src}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <img
                className="w-[342.92px] h-[342.46px] object-cover ml-auto"
                src={house3.src}
              />
              <img
                className="w-[209.44px] h-[208.49px] object-cover"
                src={house3.src}
              />
            </div>
          </div>
          </div>

          
        </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
