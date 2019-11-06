import React, {Component} from 'react';
import styled from 'styled-components'

const SubmitButton = styled.button`
    width: 100%;
    height: 34px;
    border: none;
    outline: none;
    cursor:pointer;
    border-radius: 4px;
    font-weight: lighter;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.95);
        &:hover{
            background: rgba(255, 255, 255, 0.90);
        }
        &:active{
            background: rgba(255, 255, 255, 0.80);
        }
`;

export default SubmitButton;