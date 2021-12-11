import dogbath from '../img/dogbath.png';
import dogcut from '../img/dogcut.png';
import doggroom from '../img/doggroom.png';
import pawprint from '../img/pawprint.png';
import scissors from '../img/scissors.png';
import plush2 from '../img/plush2.jpeg';
import styled from 'styled-components';




const ServicesSection = () => {
    return (
        <div className='services'> 
        <div className ="description">
            <h2>High <span>quality</span> services</h2>
            <div className='cards'>
                <div className='card'>
                    <div className='icon'>
                        <img src={dogbath} alt="dog-bath"/>
                        <h3>bathing</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={dogcut} />
                        <h3>grooming</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={scissors} />
                        <h3>Efficient</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={doggroom} />
                        <h3>Plush</h3>
                    </div>
                    <p>Efficient cleaning</p>
                </div>
            </div>
            </div> 
            <div className="image">
               <img src={plush2} />
            </div>
            </div>
        
    )
}

//styled components //



export default ServicesSection
