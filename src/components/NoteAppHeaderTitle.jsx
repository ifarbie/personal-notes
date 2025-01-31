import React from 'react';
import { Link } from 'react-router-dom';

function NoteAppHeaderTitle() {
  return (
    <div>
      <Link
        to='/'
        className='note-app__header-title'
      >
        Personal Notes
      </Link>
    </div>
  );
}

NoteAppHeaderTitle.propTypes = {};

export default NoteAppHeaderTitle;
