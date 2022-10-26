import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from './components/contact'
import Development from './components/development'
import Footer from './components/footer'
import Innovation from './components/innovation'
import Investors from './components/investors'
import Properties from './components/properties'
import Socials from './components/socials'
import Team from './components/team'
import Call from './components/call'
import AboutHero from './components/aboutHero'

export default function Home() {
  return (
    <>
    <AboutHero />
    <Development />
     <Team />
     <Call />
     <Footer />
     
    
    </>
  )
}
