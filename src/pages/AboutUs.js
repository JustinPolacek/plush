import React from 'react'
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from '../components/animation';
import { Routes, Route, Link} from 'react-router-dom';

const AboutUs = () => {
    return (

        <>
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
              <Routes>
               <Route path='AboutSection' element={<AboutSection/>}/>
               <Route path= 'ServicesSection' element= {<ServicesSection/>}/>
               <Route path='Contact' element={<Contact/>} />
              
               </Routes>
               <Footer />
               
               </motion.div>
        </>
    )
}

export default AboutUs
