import React from 'react'
import './Stylesheet/label.css'

const Title = ({description, headline, }) => {
    return (
        <div>
            <h1 className='hero-heading'> {headline} </h1>
            <p className="hero-des">{description}  </p>
            <p></p>
        </div>
    )
}

export default Title
