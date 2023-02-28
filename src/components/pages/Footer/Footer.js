import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { ReactComponent as Logo} from '../../../assets/logo.svg'
import Modal from 'react-modal';
import { oQueENeft, comoSurgiuANeft } from '../HomePage/Data';
import { contatos } from '../HomePage/Data'

function Footer() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [mapIsOpen, setMapOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState(oQueENeft);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: 5,
      transform: 'translate(-50%, -50%)',
      borderRadius: 15,
      transition: 'all 0.3s ease-out'
    },
  };

  const enchancedStyles = {
    content: {
      background: '#ffffff',
      borderRadius: '0.5em',
      boxShadow: '0 10px 20px rgba(black, 0.2)',
      left: '50%',
      maxWidth: '90%',
      pointerEvents: 'none',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '30em',
      textAlign: 'left',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function openMap() {
    setMapOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeMap() {
    setMapOpen(false);
  }

  function updateModalInfo(something){
    setModalInfo(something);
    openModal();
  }

  return (
    <div className='footer-container'>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={enchancedStyles}
      contentLabel="Modal"
    >
      <div>
          <h1 className='modal-title'>{modalInfo.question}</h1>
          <p className='modal-content'>{modalInfo.answer}</p>
      </div>
    </Modal>
    <Modal
      isOpen={mapIsOpen}
      onRequestClose={closeMap}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className='home-hero-text-wrapper' style={{padding: 0, margin: 0}}>
          <iframe
              width="400px"
              height="400px" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11928.725653974303!2d-8.348149!3d41.63021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5dea639b13ec6040!2sNeft%20Inform%C3%A1tica!5e0!3m2!1spt-PT!2spt!4v1644456331818!5m2!1spt-PT!2spt" allowfullscreen="" loading="lazy"
            >
            </iframe>
        </div>
    </Modal>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscreva a nossa newsletter!
        </p>
        <p className='footer-subscription-text'>
          Recebe as melhores promoções.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='example@email.com'
            />
            <Button buttonStyle='btn--outline'>Subscrever</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nós</h2>
            <a onClick={() => updateModalInfo(oQueENeft)}>O que é a Neft</a>
            <a onClick={() => updateModalInfo(comoSurgiuANeft)}>Como surgiu a Neft</a>
            <Link to='/'>Perguntas frequentes</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactos</h2>
            <a href='mailto: neft@geral.pt'>{contatos.email}</a>
            <a href='tel:253000000'>{contatos.phone}</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Onde Estamos</h2>
            <a onClick={() => openMap()}>{contatos.street}<br></br><br></br>{contatos.codPostal}</a>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociais</h2>
            <a href='https://www.instagram.com/neft_informatica/' target='_blank'>Instagram</a>
            <a href='https://www.facebook.com/neft.informatica' target='_blank'>Facebook</a>
            <a href='https://www.linkedin.com/in/neft-inform%C3%A1tica-24658a230/' target='_blank'>LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              NEFT
            </Link>
          </div>
          <small className='website-rights'>NEFT© 2022</small>
          <a href='https://www.livroreclamacoes.pt' className='website-rights' style={{textDecoration: 'none'}}>
              Livro de reclamações
          </a>
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
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/neft-inform%C3%A1tica-24658a230/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;