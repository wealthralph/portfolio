import React from 'react';
import './Stylesheet/label.css'


const Label = (props) => {
  return ( 
      <> 
      <div className="bg-green-100 inline-block p-1 rounded">
        <p className='text-sm font-bold'> {props.title} </p>
      </div>
      </>

  )
}

export default Label