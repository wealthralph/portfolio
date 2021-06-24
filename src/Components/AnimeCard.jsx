import React from 'react';

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
        <div className=' flex bg-green-600 rounded-xl p-4 md:p-0 my-6 w-90 '>

            <div className= 'px-5 '>
            <img src={items.gif} alt='gif' />
          </div>
          <div>
            <h3 className='text-lg font-bold' key={items.id}> {items.title}</h3>
            <p  className='max-w-prose' key={items.id}> {items.des} </p>
          </div>

          
        </div>
      ))}
    </>
  );
};

export default AnimeCard;
