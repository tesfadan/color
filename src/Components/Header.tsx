import React from 'react';
import Styled from "styled-components";
import Search from './Search';
const Header: React.FC<{}> = ({ }) => {
    return <Container>
        <img className="logo" src="/assets/logo.svg" alt="moderncolor.cc logo" />
        <Search />
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
    display: grid;
    padding: 32px 46px;
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;
    align-items: center;
    border-bottom: 1px solid #ededed;
    .logo{
        cursor: pointer;
        grid-column: 1/3;
    }

    .options{
        display: flex;
        flex-flow: row-reverse;
        align-self: right;
        grid-column: span 3;
        grid-column-end: end;
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
    .search{
        grid-column: 3/11;
        width: 100%;
    }
`