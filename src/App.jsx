import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StickyNavbar } from "./navigation";
import Hero from './hero';
import About from './about';
import Work from './work';
import Contact from './contact';
import Footer from './footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StickyNavbar />
    <Hero />
    <About />
    <Work />
    <Contact />
    <Footer />
    </>
  )
}

export default App
