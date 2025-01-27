import React from 'react';
import { Link } from 'react-router-dom';

function NoteAppHeader() {
  return (
    <header className='note-app__header'>
      <Link
        to='/'
        className='note-app__header-title'
      >
        Personal Notes
      </Link>
      <Link
        to='/archives'
        className='note-app__header-archive-link'
      >
        Archives
      </Link>
    </header>
  );
}

export default NoteAppHeader;
