import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    background: white;
    overflow-x: hidden
}

html{
    @media (max-width:  1700px){
        font-size: 70%;
    }
    @media (max-width:1300px){
        font-size: 60%;
    }
    overflow-x: hidden
}

.para-icon{
    display: flex;
    justify-content: flex-start;
    @media (max-width: 1300px){
        justify-content: center;
    }
    
    
    p{
        margin-left: 20px;
    }
}

.cnt-btn{

   margin-top: 40px;
   margin-bottom: 40px;
   a{
       text-decoration: none;
       color: hotpink;
       &:hover{
           color: white;
       }
   }
}

button{
    font-weight: bold;
    font-size: 1.7rem;
    cursor: pointer;
    padding: 3.5rem 1.5rem;
    border: 3px solid hotpink;
    background: transparent;
    color: hotpink;
    transition: all 0.5s ease;
    letter-spacing: 2px;
    border-radius: 50%;
    
    @media (max-width:1300px){
        margin-top: 20px;
    }

    &:hover{
        background-color: hotpink;
        color: white;
    }

    

    
}

h2{
        font-weight: lighter;
        font-size: 3rem;
        color: grey;
        @media (max-width:1300px){
        font-size: 3.5rem;
    }

    }
    h3{
        color: grey;


    }

    h4{
        font-wight: bold;
      
    }

    a{

        {
        font-size: 1.6rem;
        transition: all 0.5s ease;
        letter-spacing: 2px;
        padding: 1rem 1rem;
        border-radius: 8px;
        font-weight: bold;
    

        }
    &:hover{
        background-color: hotpink;
        color: white;

        #logo {

            a{
                &:hover{
               background-color: white;
            }
          
           }
        }
    }
     
    
        
        
        
    }

    span{
        font-weight: bold;
        color: hotpink;
    }
    p{
        padding: 3rem 0rem;
        color: grey;
        font-size: 1.4rem;
        line-height: 150%;
        @media (max-width:1300px){
        padding: 1.5rem;
    }
    }



`

export default GlobalStyle;