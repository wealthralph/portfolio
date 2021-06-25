import React from 'react'
import Title from './Title'
import './Stylesheet/SectionOne.css'
import {heroObjTwo} from './Data'

const SectionOne = () => {
    return (
        <>
          <div className="section-cont">
              <div className="section-box">

              </div>

            <div className="section-title">
                <Title {...heroObjTwo}  ></Title>
            </div>

              
          </div>  
        </>
    )
}

export default SectionOne
