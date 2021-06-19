import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu'
const Navbar = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='wrapper'>
          <div className='inner--header'>
            <div className='logo'>
              <Link to='/'> Ralph Portforlio </Link>
            </div>
            <div className="menu">
                <button>Menu</button>
            </div>
          </div>
          .
        </div>
        <Menu></Menu>
      </div>
    </Fragment>
  );
};

export default Navbar;
