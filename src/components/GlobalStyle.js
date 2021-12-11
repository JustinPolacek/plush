import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    background: white;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid hotpink;
    background: hotpink;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: crimson;
        color: white;
    }

    
}

h2{
        font-weight: lighter;
        font-size: 3rem;
        color: grey;

    }
    h3{
        color: grey;

    }

    h4{
        font-wight: bold;
      
    }

    a{
        font-size: 1.1rem;
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
    }



`

export default GlobalStyle;