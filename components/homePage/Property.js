import house3 from "../../public/icons/house3.jpg";

function Property() {
  return (
    <>
      <section className="Property">
        <div className="flex justify-between items-center pb-24 gap-10  w-5/6">
          <div className="flex flex-col w-2/5">
            <div className="hero-section__info-texts">
              <p className="text-blued-green font-medium">Available Property</p>
              <h1 className="hero-section__info-heading ">Featured Listing</h1>
              <h4 className="text-light-green font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </h4>
            </div>
            <div className="hero-section__info-btn mt-5">
              <button className="bg-bold-text-green text-footer-white font-bold rounded-sized-rounded px-[55px] py-[15px]">
                Exprole
              </button>
            </div>
          </div>

          <div className=" z-10 ">
            <div className="flex flex-col gap-5 ">
              <div className="grid grid-cols-2  gap-x-5 ">
                <img
                  className="w-[232px] h-[205px] object-cover mt-auto"
                  src={house3.src}
                />

                <img
                  className="w-[243px] h-[331px] object-cover mt-10 -mb-10"
                  src={house3.src}
                />
              </div>
              <div className="grid grid-cols-2 gap-x-5 ">
                <img
                  className="w-[194px] h-[260px] object-cover ml-auto "
                  src={house3.src}
                />
                <img
                  className="w-[215px] h-[135px] object-cover mt-10"
                  src={house3.src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Property;
