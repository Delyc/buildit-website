import house3 from "../../../public/icons/house3.jpg";

function AboutHero() {
  return (
    <>
      <section>
        <div className="relative w-fit">
          <img className="w-[324px] h-[420px] rounded-2xl object-cover" src={house3.src} />
          <img
            className="w-[220px] h-[285px] absolute right-0 bottom-0 -mr-20 -mb-40 rounded-2xl object-cover"
            src={house3.src}
          />
        </div>
      </section>
    </>
  );
}

export default AboutHero;
