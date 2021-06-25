import React from 'react';
import AnimeCard from './AnimeCard'
import Title from './Title';
import Label  from './Label';
import './Stylesheet/Hero.css'
import {heroObjOne, } from './Data'

const Hero = () => {
  return (
    <>
      <div className="Hero-container ">
          <div className='content-box '>
          <div className=' box'>
              <div className="content">
              <Label title='Full Stack Dev ' className='' ></Label>
              <Title {...heroObjOne} >   </Title>
              </div>
              
          </div>
          
          <div className=" ">
            <AnimeCard></AnimeCard>
          </div>
          </div>
          


      </div>
    </>
  );
};

export default Hero;
