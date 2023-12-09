import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import VinayVamshee from './Images/VinayVamshee.png'
import SolidBg from './Images/SolidBG.png'
import Logo from './Images/Vinay Vamshee-logos_black 3.png'
import Resume from './Files/MyResume.pdf'


export default function Home() {

    const [Intro, setIntro] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/GetIntro')
            .then(result => setIntro(result.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='Home'>
            <h1>Vinay Vamshee<img className='worklogo' src={Logo} alt='...' /></h1>
            <p>
                {
                    Intro.map((Element) => {
                        return (
                            <>
                                {Element.Intro}<br />
                            </>
                        )
                    })
                }
            </p>
            {/* <p>A dedicated student of Computer Science specializing<br /> in Internet of Things at VIT, Vellore.<br /> Passionate about mastering Frontend development<br /> to create seamless and innovative user experiences.</p> */}
            <a href={Resume} download="VinayVamshee Resume" style={{ fontFamily: 'impact', margin: '1rem', animation: 'SlideTop 1s forwards' }} className='btn btn-outline-danger'>Download Resume</a>
            <div className='Pic'>
                <img className='BG' src={SolidBg} alt='...' />
                <img className='image' src={VinayVamshee} alt='...' />
            </div>
        </div>
    )
}
