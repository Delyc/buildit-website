import house3 from "../../../../public/icons/house3.jpg";
import Header from '../../header'
function AboutHero() {
  return (
    <>

      <section className="flex flex-col justify-center items-center gradient1 pb-24">
        <div className="flex flex-col w-5/6">
      <Header />
      <div className="flex justify-between py-24 px-24 gap-5 ">
        <div className="relative  w-2/5 ">
          <img className="w-[324px] h-[420px] rounded-2xl object-cover" src={house3.src} />
          <img
            className="w-[220px] h-[285px] absolute right-0 bottom-0 -mr-10 -mb-20 rounded-2xl object-cover"
            src={house3.src}
          />
        </div>

        <div className="w-2/5">
          <p>About us</p>
          <h2>Owner and investor with a reputation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
