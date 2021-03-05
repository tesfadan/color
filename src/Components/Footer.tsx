import React from 'react';
import Styled from "styled-components";
const Footer: React.FC<{}> = ({ }) => {
    return <Container>
        <button className="hover" ><img src="/assets/gear.svg" /></button>
        <a className="hover" href="https://tesfadan.com/"><img src="/assets/globe.svg" /></a>
    </Container>
}

export default Footer;

const Container = Styled.div`
    /* Footer components  */
    position:absolute;
    bottom: 0px;
    padding: 28px 32px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    a, button{
        padding: 8px;
        background: unset;
        border: 0px;
        outline: 0px;
        border-radius: 6px;
        img{
            height: 18px;
        }
    }
`