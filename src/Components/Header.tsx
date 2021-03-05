import React from 'react';
import Styled from "styled-components";
const Header: React.FC<{}> = ({ }) => {
    return <Container>
        <img className="logo" src="/assets/logo.svg" alt="moderncolor.cc logo" />
        <div className="options">
            <li className="hover active">HEX</li>
            <li className="hover">RGB</li>
            <li className="hover">HSL</li>
        </div>
    </Container>
}

export default Header;

const Container = Styled.div`
    /* Header components  */
    width: 100%;
    display: flex;
    padding: 24px 32px;
    align-items: center;
    justify-content: space-between;
    .logo{
        cursor: pointer;
    }

    .options{
        display: flex;
        flex-flow: row-reverse;
        align-self: right;
    }
    li{
        font-size: 14px;
        color: #565758;
        font-weight: 600;
        margin-left: 8px;
        padding: 2px 8px;
        &.active{
            background: #E7E6E0;
        }
    }
`