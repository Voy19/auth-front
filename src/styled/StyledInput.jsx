import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: white;
         &::placeholder{
             color: rgba(255, 255, 255, 0.6); 
         }
    border-bottom:
    ${props => props.error
    ? `2px solid red;`
    : `2px solid rgba(255, 255, 255, 0.8);`
}
`;
export default StyledInput;