import React from 'react'
import {heroObjOne} from '../Data'
import Hero from '../Hero'


const Home = () => {
 return (
        <> 
        <Hero {...heroObjOne} />
        </>
    )
}

export default Home