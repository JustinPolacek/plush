import React from 'react'
import Plush from '../img/plush1.jpeg';
import styled from 'styled-components';
import Tele from '../img/telephone.png';
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import { titleAnim, fade } from '../components/animation';
const AboutSection = () => {

 
    return (
        <About>
            <Description>
                <motion.div  className='title'>
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
                <img src={Plush}  alt="poodle-dog"/>
            </Image>
            
        </About>
    )
}



export default AboutSection
