import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';

function HomePageAction() {
  return (
    <div className='homepage__action'>
      <Link
        to='/notes/new'
        className='link'
      >
        <button className='action' title='Add'>
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default HomePageAction;
