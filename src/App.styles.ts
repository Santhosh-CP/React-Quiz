import styled, {createGlobalStyle } from 'styled-components';

//import Background from './images/harrison-hargrave-46M8KAnUBlI-unsplash.jpg';
import Background from '.\\images\\harrison-hargrave-46M8KAnUBlI-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    body {
        background-image: url(${Background});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat';
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #fff, #324521);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 85px;
        text-align: center;
        margin: 20px;
        font-weight: 400;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

`