import React from 'react';
import AnimeCard from './AnimeCard'
import Title from './Title';
import Label  from './Label';


const Hero = () => {
  return (
    <>
      <div className=" relative bg-green-900">
          <div className=' flex flex-col lg:flex-row items-center gap-12 p-10 '>
          <div className='container flex flex-1 flex-col items-center lg:items-start '>
              <Label title='Full Stack Dev ' ></Label>
              <Title  ></Title>
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
