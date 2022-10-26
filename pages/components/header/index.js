import Image from "next/image";
import logo from "../../../public/icons/logo.png";
import HeroSection from "../heroSection";
import Link from 'next/link'
function Header() {
  return (
    <>
      <header className="header ">
        <nav className="navigation">
          <div className="navigation__company">
            <div className="navigation__company-logo"></div>
            <h3 className="navigation__company-name">Buildit</h3>
          </div>

          <ul className="navigation__list">
            <li className="navigation__list-item"> <Link href="/about">About</Link> </li>
            <li className="navigation__list-item"> <Link href="/services">Services</Link></li>
            <li className="navigation__list-item"> <Link href="/product">Product</Link></li>
            <li className="navigation__list-item"> <Link href="/contact">Contact</Link></li>
          </ul>

          <button className="navigation__btn gradient2">Need a project</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
