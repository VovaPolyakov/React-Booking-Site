import React,{useState} from 'react'
import Logo from '../assets/img/logo_vector@2x.svg'
import Night from '../assets/img/Night.svg'
import Account from '../assets/img/AccountCircle.svg'
import ActiveAccount from '../assets/img/accountOrange.svg'
import './NavBar.css'

const NavBar = () => {
    const [user, setUser] = useState(Account)
    function changeImages(){
        if(user == Account){
            setUser(ActiveAccount)
        }else{
            setUser(Account)
        }
    }
    const SignIn = () =>{
        if(user == ActiveAccount){
            return(
                <div className='sign'>
                    <div className='sign-row'>
                        <div className='sign-title'>
                            <h1>Sign in</h1>
                        </div>
                        <p className='sign-text'>Email address</p>
                        <input className='sign-input'></input>
                        <p className='sign-text'>Password</p>
                        <input className='sign-input'></input>
                        <button className='sign-button'>Sign in</button>
                    </div>
                </div>
            )
        }
    }
    return (
        <header>    
            <div className='container'>
                <div className='navbar__row'>
                    <div className='navbar__row-logo'>
                        <img src={Logo} alt='logo'></img>
                    </div>
                    <div className='navbar__row-menu'>
                        <ul className='menu'>
                            <li className='menu-item'><a>Stays</a></li>
                            <li className='menu-item'><a>Attractions</a></li>
                            <img className='menu-item-night' src={Night} alt='Night'></img>
                            <img className={`menu-item-account`} alt='Account' src={user} onClick={() => changeImages()} ></img>
                        </ul>
                    </div>
                </div>
                <SignIn></SignIn>
            </div>
        </header>
      )
}

export default NavBar
