import dogbath from '../img/dogbath.png';
import dogcut from '../img/dogcut.png';
import doggroom from '../img/doggroom.png';
import pawprint from '../img/pawprint.png';
import scissors from '../img/scissors.png';
import plush2 from '../img/plush2.jpeg';
import service from '../img/servicephoto.jpeg';
import service2 from '../img/service2.jpeg'
import styled from 'styled-components';

import {About, Description, Image, Hide} from '../styles';




const ServicesSection = () => {
    return (
        <Services> 
        <Description className ="description">
            <h2>High <span>quality</span> services</h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <img src={dogbath} alt="dog-bath"/>
                        <h3>BATHING</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={dogcut} />
                        <h3>GROOMING</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={scissors} />
                        <h3>NAIL TRIM</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={doggroom} />
                        <h3>PLUSH</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </Card>
            </Cards>
            </Description> 
            <Image >
               <img src={service2} />
            </Image>
            </Services>
        
    )
}

//styled components //

const Services =styled(About)`

h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}

`
const Icon =styled.div`
img{
    height: 40px;
    width: 40px;
    color: pink;
}
`

const Cards =styled.div`
display: flex;
flex-wrap: wrap;

`
const Card =styled.div`

 .icon{
     display: flex;
     align-items: center;
     h3{
         margin-left: 1rem;
         color: hotpink;
         padding: 1rem;
     }
     img{
         height: 60px;
         width: 60px;

     }
 }

`






export default ServicesSection
