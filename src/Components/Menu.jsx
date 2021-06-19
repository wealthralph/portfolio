import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="portfolio-menu">
            <div className="menu-secondary-bg-color">
                <div className="menu-layer">
                    <div className="menu-social-bg">

                    </div>
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to='/projects' >projects</Link>
                                        </li>
                                        <li>
                                            <Link to='/thoughts' >thoughts</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact us' >Contact us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;