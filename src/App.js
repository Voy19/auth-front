import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import styled from "styled-components"
import RegistrationForm from "./components/RegistrationForm";

const RegFormParent = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid lightblue;
    border-radius: 4px;
        @media (max-width: 768px) {
          margin-top: 40px;
          flex-direction: column;
          width: 70vw;
        }
        
`;

function App() {
    return (
        <RegFormParent>
            <LoginForm/>
            <RegistrationForm/>
        </RegFormParent>
    );
}

export default App;
