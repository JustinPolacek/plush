import dogbath from '../img/dogbath.png';
import dogcut from '../img/dogcut.png';
import doggroom from '../img/doggroom.png';
import pawprint from '../img/pawprint.png';
import scissors from '../img/scissors.png';
import plush2 from '../img/plush2.jpeg';
import service from '../img/servicephoto.jpeg';
import service2 from '../img/service2.jpeg'
import styled from 'styled-components';
import ModalVideo from 'react-modal-video'
import StyleVideo  from '../components/StyleVideo.scss'
import React,{useState} from 'react';
import {motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

import {About, Description, Image, Hide} from '../styles';
import { motionValue } from 'framer-motion/dist/framer-motion.cjs';




const AboutYou = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Services variants={pageAnimation} initial="hidden" animate="show"> 
        <Description className ="description">
            <h2>Family <span>Owned</span> Business</h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <h3>Our Story</h3>
                    </div>
                    <p classname="intro"> <p>Hello!</p> I am <span>Roxy! </span>
                        We  opened Plush Pups in 2016. In the heart of
                        the Inland Empire. Riverside, CA. I've always
                        loved animals since a young girl. When I would help my parents
                        tend to our "Farm" of animals growing up. I've always wanted to
                        work with animals as my passion. And here at Plush Pups I get to do that.
                        I'm happy to say that every dog that we groom here at our <span> Family Owned Business </span>
                        is like our own and we put everything that we stand behind into our work. 
                        We're so lucky to have this awesome community of ours to pour our  
                          hearts, souls, and creativity into. We look forward to
                        what the future will bring! From our family to yours. <br/> <br/>
                        
                       
                       <span> -Roxy & Vince </span>
                    </p>
                </Card>
            </Cards>
            
            <ModalVideo channel='youtube' autoPlay="autoplay muted"  loop="loop"  videoId="L-9q2M81bc4" isOpen={isOpen}  onClose={() => setOpen(false)} />
            <button className="btn-primary" onClick={()=> setOpen(true)}> VIDEO </button>
            </Description>
             
            <Image >
               <img src={plush2} />
            </Image>
            </Services>
        
    )
}

//styled components //

const Services =styled(motion.div)`


min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
margin-bottom: 50px;
@media (max-width:1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        width: 100%;

h2{
    padding-bottom: 5rem;
}
p{
    padding: 2rem 0rem 4rem 0rem;
    font-size: 22px;
}

`
const Icon =styled.div`
img{
    height: 40px;
    width: 40px;
    color: pink;
    @media (max-width:1300px){
        justify-content: center;
        align-items: center;
        
        @media (max-width: 480px){
            h3{
                font-size:
            }
        }
    }
}
`

const Cards =styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width:1300px){
        justify-content: center;
        align-items: center;
        
    }

`
const Card =styled.div`

 .icon{
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     h3{
         margin-left: 1rem;
         margin-top: 20px;
         color: hotpink;
         padding: 1rem;
         font-size: 30px;
     }
     img{
         height: 60px;
         width: 60px;
         @media (max-width:1300px){
         height: 40px
         width: 40px;
    }

     }
 }

`






export default AboutYou;
