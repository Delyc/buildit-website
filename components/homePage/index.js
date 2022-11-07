import Investor from "./Investor";
import HeroSection from "./heroSection";
import Innovation from "./innovation";
import Property from "./Property";
import Social from "./Social";
import Contact from "./contact";
import Footer from "../footer";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Innovation />
      <Investor />
      <Property />
      <Social />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
