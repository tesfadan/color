import React from 'react';
import styled from 'styled-components';
import Schemes from "../Data/Schemes.json"
import Scheme from './Scheme';

const Main = () => {
    return (
        <Container>
            {Schemes.map(scheme => <Scheme name={scheme.name} colors={scheme.colors} />)}
        </Container>
    );
}

export default Main;

const Container = styled.div`
    max-width: 1200px;
    width: 100vw;
    flex:1;
    padding-top: 32px;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);

    
`