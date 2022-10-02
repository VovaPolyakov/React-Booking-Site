import React,{useState} from 'react'
import Logo from '../assets/img/logo_vector@2x.svg'
import Night from '../assets/img/Night.svg'
import Account from '../assets/img/AccountCircle.svg'
import ActiveAccount from '../assets/img/accountOrange.svg'
import SignWindow from './SignWindow'
import { 
    StyledHeader,
    StyledContainer,
    StyledNavRow,
    StyledNavLogo,
    StyledNavMenu,
    StyledNavMenuItem,
    StyledNavImg 
} from './styled'

const NavBar = () => {
    const [user, setUser] = useState(Account)
    const [open , setOpen] = useState(false)
    const changeImages = () => {
        if(user == Account){
            setUser(ActiveAccount)
            setOpen(true)
        }else{
            setUser(Account)
            setOpen(false)
        }
    }
    return (
        <StyledHeader>    
            <StyledContainer>
                <StyledNavRow>
                    <StyledNavLogo>
                        <img src={Logo} alt='logo'></img>
                    </StyledNavLogo>
                    <StyledNavMenu>
                        <StyledNavMenuItem><a>Stays</a></StyledNavMenuItem>
                        <StyledNavMenuItem ><a>Attractions</a></StyledNavMenuItem>
                        <StyledNavImg src={Night} alt='Night'></StyledNavImg>
                        <StyledNavImg alt='Account' src={user} onClick={() => changeImages()} ></StyledNavImg>
                    </StyledNavMenu>
                </StyledNavRow>
                {open ? <SignWindow open={open}/> : ''}
            </StyledContainer>
        </StyledHeader>
      )
}

export default NavBar
