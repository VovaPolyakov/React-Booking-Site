import styled from 'styled-components'

export const StyledHeader = styled.header`
   padding-top: 20px; 
   a{
    text-decoration: none;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF
   }
`;

export const StyledContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`;
export const StyledNavRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const StyledNavLogo = styled.div`

`;

export const StyledNavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledNavMenuItem = styled.li`
    list-style: none;
    padding: 10px 20px;
    border-bottom:1px solid transparent ;
    :hover{
        border-bottom:1px solid #F5BD41 ;
    }
`;
export const StyledNavImg = styled.img`
    background: transparent;
    padding:  20px;
`;