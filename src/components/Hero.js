import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Hero.css'
import { ReactComponent as Fixing} from '../assets/fixing.svg'
import { ReactComponent as Time} from '../assets/time.svg'
import { ReactComponent as Maintenance} from '../assets/maintenance.svg'
import { ReactComponent as Server} from '../assets/server.svg'
import { ReactComponent as Remotely} from '../assets/remotely.svg'
import Fade from 'react-reveal/Fade';

function Hero({
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
    list,
    id
}) {
    return (
        <div>
            <div className={lightBg ? "home-hero-section" : "home-hero-section darkBg"}>
                <div id={id} className="container">
                    <div className="row home-hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                        <div className="col">
                            <Fade right={imgStart === 'start' ? false : true} bottom={imgStart === 'start' ? true : false}>
                                <div className="home-hero-text-wrapper">
                                    <div className="top-line">{topLine}</div>
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'home-hero-subtitle' : 'home-hero-subtitle dark' }>{description}</p>
                                    <Link style={{display: 'none'}} to="/" >
                                        <Button buttonSize='btn--wide' buttonColor='blueGreen'>{buttonLabel}</Button>
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade left={imgStart === 'start' ? true : false } bottom={imgStart === 'start' ? false : true} big>
                                <div className="home-hero-img-wrapper">
                                    {img === 'fixing' ? 
                                       <div>{/*  <Fixing style={{width: 500}} className='home-hero-img'/> */}</div> 
                                    : null}
                                    {img === 'list' ?
                                        <div style={{color: '#00000'}}>
                                            <ul className='list'>
                                                {/*list.map((element, index) => (
                                                    <li className='list-item'>{
                                                        index===0 ? <Maintenance style={{width: 300}} className='list-image'/> :
                                                        index===1 ? <Remotely style={{width: 300}} className='list-image'/> :
                                                        index===2 ? <Time style={{width: 300}} className='list-image'/> :
                                                        <Server style={{width: 300}} className='list-image'/>
                                                    }{element.info}</li>
                                                ))*/}
                                            </ul>
                                        </div>
                                    : null}
                                    {/* <img src={img} alt={alt} className="home-hero-img" /> */}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
