import styled from "styled-components";

// export const Input = styled.input`


export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -109px;
`;

export const Input = styled.input`
  margin-top: 207px;
    margin-left: 567px;
    display: flex;
    justify-content: flex-start;
    background: #fced8a;
    width: 397px;
    height: 41px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #9f9f21;
    padding-top: 12px;
    padding-left: 27px;
    color: white;

    &:focus{
        background: red;
        border: 3px solid yellow;
        color: white;
        border: none;
        &::placeholder{
            color: white;
        }
    }

    

`;

   
