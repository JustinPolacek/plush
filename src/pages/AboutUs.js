import React from 'react'
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';
import { pageAnimation } from '../components/animation';
const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
               <AboutSection />
               <ServicesSection/>
               <Contact />
               <Footer />
        </motion.div>
    )
}

export default AboutUs
