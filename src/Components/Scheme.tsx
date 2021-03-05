import React from 'react';
import styled from 'styled-components';

const Scheme: React.FC<{ name: String, colors: string[] }> = ({ name, colors }) => {
    return (<Container>
        <div className="info">
            {name}
            <button>
                <img src="/assets/heartOutline.svg" alt="Save this Color Scheme" />
            </button>
        </div>
        <div className="colors">
            {colors.map(color =>
                <div className="color" style={{ background: color }} />
            )}
        </div>
    </Container>
    );
}

export default Scheme;

const Container = styled.div`
    height: 220px;
    border: 1px solid #e0e3e7;
    display:flex;
    flex-flow: column;
    border-radius: 6px;
    overflow: hidden;
    transition: 0.08s ease-in;

    &:hover{
        box-shadow: 0px 20px 44px #00000016;
        .info{
            color: #484b4d;
        }
        img{
            opacity: 0.6;
        }
    }

    .info{
        transition: 0.08s ease-in;
        padding: 6px 12px;
        padding-right: 6px;
        font-size: 14px;
        font-weight: 500;
        color: #828688;
        display:flex;
        justify-content:space-between;
        align-items:center;
        user-select: none;
    }

    button{
        padding: 4px 0px;
        border: 0px;
        width: 36px;
        border-radius:3px;
        display:flex;
        justify-content:flex-end;
        background:unset;
        outline: 0px;
    }

    img{
        transition: 0.08s ease-in;
        height:24px;
        float: right;
        opacity: 0;
    }

    .colors{
        background:#ccc;
        display:flex;
        flex:1;
    }

    .color{
        flex: 1;
        cursor: pointer;
    }
`