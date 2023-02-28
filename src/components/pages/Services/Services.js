import React, { useEffect } from 'react'
import '../../../App.css'
import Navbar from '../../Navbar'
import Bounce from 'react-reveal/Bounce';
import './Services.css'
import Footer from '../Footer/Footer'
import { FaServer, FaDesktop, FaCogs, FaFileContract, FaPrint, FaMailBulk, FaHtml5, FaGlobe } from 'react-icons/fa'

function Services() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
            <div>
                <Navbar alwaysFilled={true}/>
            <div>
            <div style={{height: '100vh'}} className="services-section">
                <Bounce bottom>
                <div className="container-services">
                    <h1>Serviços</h1>
                    <div className="row-services">
                        <div className="service">
                            <div className="icon">
                                <FaDesktop size={40}/>
                            </div>
                            <h2>Software</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaCogs size={40}/>
                            </div>
                            <h2>Hardware</h2>
                            </div>
                        <div className="service">
                            <div className="icon">
                                <FaFileContract size={40}/>
                            </div>
                            <h2>Consultoria</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaPrint size={40}/>
                            </div>
                            <h2>Impressoras</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaMailBulk size={40}/>
                            </div>
                            <h2>Emails</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaHtml5 size={40}/>
                            </div>
                            <h2>Sites e Domínios</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaGlobe size={40}/>
                            </div>
                            <h2>Internet</h2>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FaServer size={40}/>
                            </div>
                            <h2>Redes e Servidores</h2>
                        </div>
                    </div>
                    </div>
                </Bounce>
                </div>
            </div>
           </div>
    )
}

export default Services