import React from 'react'
import './Stylesheet/SectionTwo.css'
import Label from './Label'
import Title from './Title'
import {heroObjThree} from './Data'

const SectionTwo = () => {
    return (
        <> 
            <section className="sectionTwo-cont">
                <div className="sectionTwo-box">
                    <div className="title-box">
                        <Label title = 'Full Stack Dev' ></Label>
                        <Title {...heroObjThree} ></Title>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default SectionTwo
