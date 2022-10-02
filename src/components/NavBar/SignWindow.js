import React from 'react'

import {
    StyledSign,
    StyledSignRow,
    StyledSignTitle,
    StyledSignInput,
    StyledSignText,
    StyledSignButton,
} from './SignStyled'

const SignWindow = (status) =>{
    if(status){
        return(
            <StyledSign>
                <StyledSignRow>
                    <StyledSignTitle>Sign in</StyledSignTitle>
                    <StyledSignText>Email address</StyledSignText>
                    <StyledSignInput></StyledSignInput>
                    <StyledSignText >Password</StyledSignText>
                    <StyledSignInput></StyledSignInput>
                    <StyledSignButton>Sign in</StyledSignButton>
                </StyledSignRow>
            </StyledSign>
        )
    }
}

export default SignWindow
