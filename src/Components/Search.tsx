import React from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {
    return <Container className="search">
        <input placeholder="Search" />
    </Container>
}

export default Search;


const Container = styled.div`
    display:flex;
    justify-content: center;
    input{
        height: 48px;
        padding: 16px;
        text-align: center;
        border:0px;
        border-radius: 6px;
        background: #E7E6E0;
        outline:0px;
        font-weight: 500;
        font-size:16px;
        width: 100%;
        max-width: 520px;
        }
`