import React from 'react'
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from '../components/animation';
import { Routes, Route, Link,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const AboutUs = () => {
    const location = useLocation();
    return (


        <>
        <motion.div 
        exit="exit"
        variants={pageAnimation}
         initial="hidden"
         animate="show">
             <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
               <Route path='/' element={<AboutSection />}/>
               <Route path='AboutSection' element={<AboutSection />}/>

               <Route path= 'ServicesSection' element= {<ServicesSection/>}/>
               <Route path='Contact' element={<Contact/>} />
              
               </Routes>
               </AnimatePresence>
               <Footer />
               
               </motion.div>
        </>
    )
}

export default AboutUs
