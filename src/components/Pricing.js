import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Pricing.css'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

function Pricing() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const customStyles = {
        content: {
            background: '#ffffff',
            borderRadius: '0.5em',
            boxShadow: '0 10px 20px rgba(black, 0.2)',
            left: '50%',
            maxWidth: '90%',
            pointerEvents: 'all',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40em',
            textAlign: 'left',
            height: '80%',
            maxHeight: '90%',
            display: 'flex',
            flexDirection: 'column',
            overflow:'auto'
        },
    };

    Modal.setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div id="pricing">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
                >
                <div style={{paddingBottom: 0}}>
                    <h1 className='modal-title' style={{fontSize: 30, paddingBottom: '0.5em'}}>Mais de 20 dispositivos</h1>
                    <p className='modal-content' style={{fontSize: 16, marginBottom: 0}}>Apenas por orçamento.</p>
                    <br></br>
                    <h1 className='modal-title' style={{fontSize: 30, paddingBottom: '0.5em'}}>Quando a mensalidade é faturada?</h1>
                    <p className='modal-content' style={{fontSize: 16, marginBottom: 0}}>A mensalidade é faturada até ao dia 8 do mês seguinte.</p>
                    <br></br>
                    <h1 className='modal-title' style={{fontSize: 30, paddingBottom: '0.5em'}}>Preços sem contrato</h1>
                    <p className='modal-content' style={{fontSize: 16, marginBottom: 0}}>Deslocação</p>
                    <p className='modal-content' style={{fontSize: 16, marginBottom: 0, border: 'none'}}>Assistência presencial</p>
                    <p className='modal-content' style={{fontSize: 16, border: 'none'}}>Assistência remota: p/hora</p>
                </div>
                </Modal>
           <div className="pricing-section">
               <div className="pricing-wrapper">
                   <Fade left>
                    <h1 className="pricing-heading">Planos Avença Mensal</h1>
                    <h4 className="pricing-heading">Contrato de Assistência</h4>
                   </Fade>
                   <Bounce bottom>
                    <div className="pricing-container">
                        <Link to="/" className="pricing-container-card">
                                <div className="pricing-container-cardInfo">
                                    <div className="icon">
                                        <FaFire size={40}/>
                                    </div>
                                    <h3>Iniciante</h3>
                                    <h4>39,90 €</h4>
                                    <p>Mensalidade</p>
                                    <ul className="pricing-container-features">
                                        <li>1 a 5 dispositivos</li>
                                        <li>0€ de custo inicial</li>
                                        <li>Sem fidelização</li>
                                    </ul>
                                </div>
                        </Link>
                        <Link to="/" className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <div className="icon">
                                    <FaFire size={40}/>
                                </div>
                                <h3>Intermédio</h3>
                                <h4>79,90 €</h4>
                                <p>Mensalidade</p>
                                <ul className="pricing-container-features">
                                    <li>6 a 12 dispositivos</li>
                                    <li>0€ de custo inicial</li>
                                    <li>Sem fidelização</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to="/" className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <div className="icon">
                                    <FaFire size={40}/>
                                </div>
                                <h3>Avançado</h3>
                                <h4>109,90 €</h4>
                                <p>Mensalidade</p>
                                <ul className="pricing-container-features">
                                    <li>13 a 20 dispositivos</li>
                                    <li>0€ de custo inicial</li>
                                    <li>Sem fidelização</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center'}}>
                        <small style={{marginTop: 30, marginBottom: 30}}>Estes serviços não incluem material informático</small>
                        <a onClick={() => openModal()}>
                        <Button buttonSize='btn--wide' buttonColor='blueGreen'>Saber Mais</Button>
                        </a>
                    </div>      
                   </Bounce>
               </div>
           </div> 
        </div>
    );
}

export default Pricing