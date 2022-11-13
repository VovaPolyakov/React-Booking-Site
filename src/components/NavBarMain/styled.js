import styled from 'styled-components';

export const StyledNavBarMain = styled.div`
    margin-top: 100px;
`;

export const StyledContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`;

export const StyledMainTitle = styled.div`
    display:flex;
    justify-content:left;
    width:600px;
    margin-left: 30px;
`;

export const StyledTitle = styled.h1`
    text-align:left;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    color: #FFFFFF;
`;

export const StyledMainInputs = styled.div`
    display:flex;
    align-items: center;
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    height:70px;
    width:max-content;
    border:none;
    margin-top: 150px;
`;

export const StyledMainInput = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    margin-left:20px;
`;

export const StyledInput = styled.input`
    height:100%;
    border:none;
    outline:none;
    border-radius: 8px;
    width:500px;
    cursor: pointer;

`;
export const StyledInputDate = styled.input`
    height:100%;
    border:none;
    outline:none;
    width:300px;
    border-radius:8px;
    border: 3px solid #F5BD41;
    padding: 0 10px;
    text-align:center;
    cursor: pointer;
`;
export const StyledInputInformation = styled.input`
    height:100%;
    width:400px;
    border:none;
    outline:none;
    text-align:center;
    cursor: pointer;
`;


export const StyledButton = styled.button`
    background: #3077C6;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    border:none;
    height:100%;
    width:200px;
    color:#fff;
    cursor: pointer;
`;