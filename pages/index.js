import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from './components/contact'
import Footer from './components/footer'
import Innovation from './components/innovation'
import Investors from './components/investors'
import Properties from './components/properties'
import Socials from './components/socials'
import Header from './components/header'
import HeroSection from './components/heroSection'

export default function Home() {
  return (
    <>
    <HeroSection />
   
    <Innovation />
    <Investors />
    <Properties />
    <Socials/>
    <Contact />
    <Footer />
    </>
  )
}
