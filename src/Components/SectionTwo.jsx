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
                        <Title {...heroObjThree} title='hero-dark' desc='des-dark' ></Title>
                    </div>

                    <div className="boxes">
                        <div className="box">
                            
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default SectionTwo
