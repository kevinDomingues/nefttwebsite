import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext} from 'react-icons/lib'
import { debounce } from '../utilities/helper';

function Navbar({alwaysFilled}) {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const closeMobileMenu = () => setClick(false)
    const [prevScrollpos, setPrevScrollPos] = useState(0);
    const [navbarVisible, setnavbarVisible] = useState(true);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const handleClick = () => setClick(!click);

    const handleScroll = debounce(() =>  {
        const currentScrollPos = window.pageYOffset;

        setnavbarVisible((prevScrollpos > currentScrollPos && prevScrollpos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100)

    useEffect(() => {
        window.addEventListener('resize', showButton);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('resize', showButton);
            window.removeEventListener('scroll', handleScroll);
        }

    }, [prevScrollpos, navbarVisible, handleScroll, showButton])

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={"navbar"} style={{top: navbarVisible ? '0' : '-90px',
                 boxShadow: prevScrollpos == 0 ? '0px 4px 15px 5px rgba(0,0,0,0)' : '0px 4px 15px 5px rgba(0,0,0,0.21)',
                 background: prevScrollpos < 660 && alwaysFilled !== true ? 'rgba(255,255,255,0)': '#003f53'}}>
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            NEFT
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />} 
                        </div>
                        <ul style={{background: prevScrollpos < 660 && alwaysFilled !== true ? 'rgba(255,255,255,0)': '#003f53'}} className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="navItem">
                                <Link to='/' className="nav-links">
                                    Home
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link to='/services' className="nav-links">
                                    Serviços
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link to='/contacts' className="nav-links">
                                    Contatos
                                </Link>
                            </li>
                        </ul>        
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
