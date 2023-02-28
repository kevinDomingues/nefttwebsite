import React, { useEffect } from 'react'
import Hero from '../../Hero'
import Landing from '../../Landing'
import HeroList from '../../HeroList'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import '../../../App.css'
import Pricing from '../../Pricing'
import Footer from '../Footer/Footer'
import Navbar from '../../Navbar'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Navbar />
            <Landing {...homeObjOne}/>
            <Hero {...homeObjTwo}/>
            <Hero {...homeObjThree}/>
            <HeroList {...homeObjFour}/>
            <Pricing />
            <Footer />
        </div>
)
}

export default Home
