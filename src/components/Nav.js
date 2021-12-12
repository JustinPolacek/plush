import paw from "../img/pawprint.png"
import logo from "../img/logo.png";
import styled from 'styled-components';


const Nav = () => {
    return (
        <StyledNav>
       
            <h1>   <a href="#"> <img src={logo} /></a></h1>
      
            <ul>
                
                   <li > 
                       <a  href="#">ABOUT</a>
                   
                   </li> 
                    <li> 
                         <a href="#">SERVICES</a>
                    </li>
                    <li>

                    <a href="#">CONTACT</a>

                    </li>

                
            </ul>
        </StyledNav>
    )
}

const StyledNav=styled.nav`
display: flex;
justify-content: space-between;
min-height: 10vh;
align-items: center;
margin: auto;
padding: 1rem 10rem;

a{
    color: hotpink;
    text-decoration: none;
    font-size: 1.2rem;
   
    
}
ul{
    display: flex;
    list-style: none;
{
    
   
}
}
h1 a{
    font-size: 1.5rem;

    img{
        width: 150px;
        height: 80px;
    }

}
li{
    padding-left: 10rem;
}


`;


export default Nav;