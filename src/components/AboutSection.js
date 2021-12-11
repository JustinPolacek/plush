import React from 'react'
import Plush from '../img/plush1.jpeg';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className='hide'>
                        <h2>We work to make</h2>
                    </div>
                    <div className='hide'>
                        <h2>your <span>dreams</span> come
                        
                        </h2>
                    </div>
                    <div className='hide'>
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact us for any projects</p>
                <button>Contact</button>
            </Description>
            <Image>
                <img src={Plush}  alt="poodle-dog"/>
            </Image>
            
        </About>
    )
}

const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`

const Description =styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`

const Image =styled.div`
flex: 1;

img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`

export default AboutSection
