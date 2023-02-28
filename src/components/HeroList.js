import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Hero.css'
import { ReactComponent as Advantages} from '../assets/problemas.svg'
import Fade from 'react-reveal/Fade';

function HeroList({
    lightBg, 
    topLine, 
    lightText, 
    headline, 
    img, 
    imgStart,
    list
}) {
    return (
            <div className={lightBg ? "home-hero-section" : "home-hero-section darkBg"}>
                <div className="container">
                    <div className="row home-hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                        <div className="col">
                        <Fade right={imgStart === 'start' ? false : true} bottom={imgStart === 'start' ? true : false}>
                                <div className="home-hero-text-wrapper">
                                    <div className="top-line">{topLine}</div>
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    {img === 'advantages' ?
                                        <div>
                                            <ul>
                                                <Fade right>
                                                {list.map((element, index) => (
                                                    <li className='flat-list-item'>{element.info}</li>
                                                ))}
                                                </Fade>
                                            </ul>
                                        </div>
                                    : null}
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade left={imgStart === 'start' ? true : false } bottom={imgStart === 'start' ? false : true} big>
                                <div className="home-hero-img-wrapper">
                                    {img === 'advantages' ? 
                                        <div>{/* <Advantages style={{width: 500}} className='home-hero-img'/> */}</div>
                                    : null}
                                    {img === 'list' ?
                                        <div style={{color: '#00000'}}>
                                            <ul>
                                                {list.map((element, index) => (
                                                    <li className='list-item'>{element.info}</li>
                                                ))}
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
    )
}

export default HeroList;
