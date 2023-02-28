import React from 'react'
import { ReactComponent as Logo} from '../assets/logo.svg'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Landing.css'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

import { contratoAssistencia } from './pages/HomePage/Data';

function Landing({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    description, 
    buttonLabel, 
    img,
    alt,
    imgStart,
    Video
}) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState(contratoAssistencia);

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
            height: '28em',
            width: '30em',
            textAlign: 'left',
            maxHeight: '90%',
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function updateModalInfo(something){
        setModalInfo(something);
        openModal();
    }

    return (
        <div>
            <div>
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
            </div>
            <div className="landingContainer">
                <div className="landingBg">
                    <video className="videoBg" autoPlay loop muted src={Video} type='video/mp4'></video>
                </div>
                <div className="landingContent">
                    <Fade bottom>
                    <h1>{headline}</h1>
                    <p>{description}</p>
                    <a onClick={() => updateModalInfo(contratoAssistencia)} >
                        <Button buttonSize='btn--wide' buttonColor='blueGreen'>{buttonLabel}</Button>
                    </a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Landing
