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
import { motion } from 'framer-motion';
import {pageAnimation, slider, sliderContainer} from '../components/animation';

import {About, Description, Image, Hide} from '../styles';




const ServicesSection = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        
        
        <Services exit="exit" variants={pageAnimation} initial="hidden" animate="show"> 

        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Description className ="description">
            <h2>High <span>quality</span> services</h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <img src={dogbath} alt="dog-bath"/>
                        <h3>BATHING</h3>
                    </div>
                    <p>Bathing Services</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={dogcut} />
                        <h3>GROOMING</h3>
                    </div>
                    <p>Grooming Services</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={scissors} />
                        <h3>NAIL TRIM</h3>
                    </div>
                    <p>Nail Trimming</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={doggroom} />
                        <h3>CUSTOMIZE</h3>
                    </div>
                    <p>Selections</p>
                </Card>
            </Cards>
            
            <ModalVideo channel="youtube" autoPlay muted   loop="loop"  videoId="L-9q2M81bc4" isOpen={isOpen}  onClose={() => setOpen(false)} />
            <button className="btn-primary" onClick={()=> setOpen(true)}> VIDEO </button>
            </Description>
             
            <Image >
               <img src={service2} />
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
@media (max-width:1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        width: 100%;
        


h2{
    padding-bottom: 5rem;
    margin-bottom: 2rem;
}
p{
    width: 100%;
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
        
    }
}
`

const Cards =styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 100px;

@media (max-width:1300px){
        justify-content: center;
        align-items: center;
        
    }

`
const Card =styled.div`

 .icon{
     display: flex;
     align-items: center;
     h3{
         margin-left: 1rem;
         color: hotpink;
         padding: 1rem;
         font-size: 20px;
     }
     img{
         height: 40px;
         width:40px;
         @media (max-width:1300px){
         height: 40px
         width: 40px;
    }

     }
 };



`

 //Frame Animaton //



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






export default ServicesSection;
