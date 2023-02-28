import React, { useEffect } from 'react'
import '../../../App.css'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer'
import './Contacts.css'
import { contatos } from '../HomePage/Data'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
  } from 'react-icons/fa';
import { ReactComponent as Logo} from '../../../assets/logo.svg'

function Contacts() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Navbar alwaysFilled={true}/>
            <div className='footer-container' style={{height: '100vh', justifyContent: 'start'}}>
                <form className='formClass'>      
                    <input name="name" type="text" class="feedback-input" placeholder="Nome" />   
                    <input name="email" type="text" class="feedback-input" placeholder="Email" />
                    <textarea name="text" class="feedback-input" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Email</h2>
                        <a href='mailto: neft@geral.pt'>{contatos.email}</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Telefone</h2>
                        <a href='tel:253000000'>{contatos.phone}</a>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    </div>
                </div>
                <section className='social-media' style={{position: 'absolute'}}>
                    <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        NEFT
                        </Link>
                    </div>
                    <small className='website-rights'>NEFT© 2022</small>
                    <div className='social-icons'>
                        <a
                        className='social-icon-link'
                        href='https://www.facebook.com/neft.informatica'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <FaFacebook />
                        </a>
                        <a
                        className='social-icon-link'
                        href='https://www.instagram.com/neft_informatica/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <FaInstagram />
                        </a>
                        <Link
                        className='social-icon-link'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <FaLinkedin />
                        </Link>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contacts