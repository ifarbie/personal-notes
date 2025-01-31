import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { CgLogOut } from 'react-icons/cg';
import PropTypes from 'prop-types';

function NoteAppHeaderMenu({ onLogout, name }) {
  return (
    <div className='note-app__header-menu'>
      <div>
        <Link
          to='/archives'
          className='note-app__header-archive-link'
        >
          Archives
        </Link>
      </div>
      <ThemeButton />
      <div className='logout-container'>
        <Link
          onClick={onLogout}
          className='logout-link'
        >
          <div className='logout-icon'>
            <CgLogOut />
          </div>
          <div className='logout-name'>{name}</div>
        </Link>
      </div>
    </div>
  );
}

NoteAppHeaderMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NoteAppHeaderMenu;
