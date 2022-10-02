import styled from "styled-components";


export const StyledSign = styled.div`
    margin: 0 auto;
    background-color: #FFFFFF;
    width: 400px;
    height: 360px;
    position: absolute;
    top: 220px;
    left:39%;
    border-radius: 10px;
`;
export const StyledSignRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledSignTitle = styled.h1`
    font-style: bold;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    color: #000000;
`;

export const StyledSignInput = styled.input`
    background: #FFFFFF;
    border: 2px solid #CECECE;
    border-radius: 8px;
    padding: 10px;
    width: 300px;
`;

export const StyledSignText = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    color: #333333;
    width: 315px;
    display: flex;
    justify-content: left;
`;

export const StyledSignButton = styled.button`
    margin-top: 30px;
    background: #3077C6;
    border-radius: 8px;
    width: 324px;
    padding: 10px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF; 
`;