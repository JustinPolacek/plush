import React from 'react'
import Plush from '../img/plush1.jpeg';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2> your dog's <span>dreams</span> come
                         
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
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



export default AboutSection
