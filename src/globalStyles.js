import { createGlobalStyle } from "styled-components";
import Beer from "../src/assets/beer.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: #212121;
    color: #e2e8f0;
     /* background-image:  linear-gradient(
  hsl(0deg 19% 8%) 0%,
  hsl(1deg 56% 11%) 25%,
  hsl(0deg 91% 13%) 50%,
  hsl(28deg 100% 7%) 75%,
  hsl(60deg 4% 5%) 100%
); */
background-image: linear-gradient(90deg, rgba(6,1,1,0.68) 0%, rgba(3,15,20,0.69) 100%),url(${Beer}) ;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  }

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
   border: 2px solid #ffffff;
  -webkit-text-fill-color: #52555f;
  
  transition: background-color 5000s ease-in-out 0s;
}
`;
