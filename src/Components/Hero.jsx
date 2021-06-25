import React from 'react';
import AnimeCard from './AnimeCard'
import Title from './Title';
import Label  from './Label';


const Hero = () => {
  return (
    <>
      <div className=" ">
          <div className=' '>
          <div className=' '>
              <Label title='Full Stack Dev ' className='' ></Label>
              <Title> Building Digital Experiences For Mordern Web   </Title>
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
