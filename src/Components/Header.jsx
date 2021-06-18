import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa'

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
                
            </div>
        </div>
    )
}

export default Header ;