// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
// import Logo from './Images/VinayVamsheeWorkLogo.png'

const ThemeStored = () => {
    let Theme = localStorage.getItem('Theme');
    if (Theme) {
        return (
            JSON.parse(localStorage.getItem('Theme'))
        )
    }
    else {
        return [];
    }
}

export default function NavigationBar() {

    const [Theme, setTheme] = useState(ThemeStored);
    const ChangeTheme = () => {
        if (Theme === 'light-theme') {
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme')
        }
        window.location.reload();
    }

    useEffect(() => {
        localStorage.setItem('Theme', JSON.stringify(Theme))
    }, [Theme]);

    return (
        <div className='NavigationBar'>
            <div className='Logo'>
                {/* <img className='logoimg' src={Logo} alt='...' /> */}
                <p className='ps-2'>My Portfolio</p>
            </div>
            <div className='NaviItems'>
                <Link to='/' className='btn btn-info button' style={{ fontFamily: 'Comic' }}>Home</Link>
                <Link to='/About' className='btn btn-info button' style={{ fontFamily: 'Comic' }}>About</Link>
                {/* <button className='btn btn-outline-primary' style={{ fontFamily: 'Comic' }}>About</button> */}
                <Link to='/Contact' className='btn btn-info button' style={{ fontFamily: 'Comic' }}>Contact Me</Link>
                <button onClick={ChangeTheme} className='btn btn-outline-secondary button rounded-5' style={{ fontFamily: 'Comic' }}>Theme</button>
            </div>
        </div>
    )
}
