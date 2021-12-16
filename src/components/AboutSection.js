import React from 'react'
import Plush from '../img/plush1.jpeg';
import styled from 'styled-components';
import Tele from '../img/telephone.png';
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim, fade,slider, sliderContainer } from '../components/animation';
import ServicesSection from './ServicesSection';
import AboutYou from '../components/AboutYou';


const AboutSection = () => {

 
    return (
        <>
        <About >
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
            <Description>
                <motion.div variants={pageAnimation} initial="hidden" animate="show"  className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnim}  >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} > your dog's <span>dreams</span> come
                    
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.button variants={fade} className='cnt-btn'> <a href="tel:+9514817899">Contact</a></motion.button>

                <div className='para-icon'>
                <motion.a variants={fade} href="https://www.instagram.com/plushpupspetspa/?hl=en"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></motion.a>
                <motion.a variants={fade}  href="https://www.facebook.com/plushpupspetboutiqueandspa/"><img src="https://img.icons8.com/color/48/000000/facebook-new.png"/></motion.a>
                <motion.a variants={fade} href="https://www.yelp.com/biz/plush-pups-pet-boutique-and-spa-riverside"><img src="https://img.icons8.com/color/48/000000/yelp.png"/></motion.a>

                 </div>
                
            </Description>
            <Image>
                <motion.img src={Plush}  alt="poodle-dog"></motion.img>
            </Image>
        </About>
         <AboutYou/>
        </>
    )
}



const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh; 
background: hotpink;
z-index: 2;

`

const Frame2 = styled(Frame1)`
background: lightpink;

`

const Frame3 = styled(Frame1)`
background: white;
`
const Frame4 = styled(Frame1)`
background: coral;


`



export default AboutSection
