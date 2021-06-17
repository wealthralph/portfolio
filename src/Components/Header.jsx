import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa'
import Button from './Button'

const Header = () => {

    const [click, setClick] = useState(false)

    const handleClick =() => setClick(!click)

    return (
        <div className='header'>
            <div className="header-container">
                <Link className="header-logo">
                    Ralph Portfolio
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>

                <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className= 'nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className= 'nav-links'>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className= 'nav-links'>
                            Thoughts
                        </Link>
                    </li>
                    <li className="nav-item">
                        { button ? (<Link  className= 'btn-links'>
                            <Button buttonStyle= 'btn--outline'>Contact me</Button>
                        </Link>) : (
                            <Link className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'></Button>
                            </Link>
                        ) }
                    </li>

                </ul>
                
            </div>
        </div>
    )
}

export default Header ;