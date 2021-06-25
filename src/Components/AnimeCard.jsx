import React from 'react';
import './Stylesheet/label.css'

const CardItems = [
  {
    id: 1,
    title: 'Full Stac Dev',
    des: 'A duck who walks, swim and occasionally flies ',
    gif: 'ff',
  },
  {
    id: 2,
    title: 'Design',
    des: 'Pixel perfect desigsns for products ',
    gif: 'ff',
  },
  {
    id: 3,
    title: 'Full Stac Dev',
    des: 'A duck who walks, swim and occasionally flies ',
    gif: 'ff',
  },
];

const AnimeCard = () => {
  return (
    <>
      {CardItems.map((items) => (
        <div className=' container-card '>

            <div className= 'gif '>
            <img src={items.gif} alt='gif' />
          </div>
          <div className='text-box'>
            <h3 key={items.id}> {items.title}</h3>
            <p   key={items.id}> {items.des} </p>
          </div>

          
        </div>
      ))}
    </>
  );
};

export default AnimeCard;
