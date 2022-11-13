import React from 'react'
import {StyledNavBarMain,
  StyledContainer,
  StyledMainTitle,
  StyledTitle,
  StyledMainInputs,
  StyledInput,
  StyledMainInput,
  StyledButton,
  StyledInputDate,
  StyledInputInformation
} from './styled'

const NavBarMain = () => {
  return (
    <StyledNavBarMain>
      <StyledContainer>
        <StyledMainTitle>
            <StyledTitle>Discover stays<br></br>
                to live, work or just relax
            </StyledTitle>
        </StyledMainTitle>
        <StyledMainInputs>
            <StyledMainInput>
                <StyledInput placeholder='New York'></StyledInput>
            </StyledMainInput>
            <StyledMainInput>
                <StyledInputDate type='date' ></StyledInputDate>
            </StyledMainInput>
            <StyledMainInput>
              <StyledInputInformation placeholder='2 Adults — 0 Children — 1 Room'></StyledInputInformation>
            </StyledMainInput>
            <StyledButton>Search</StyledButton>
        </StyledMainInputs>
      </StyledContainer>
    </StyledNavBarMain>
  )
}

export default NavBarMain
