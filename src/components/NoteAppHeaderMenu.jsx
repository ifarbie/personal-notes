import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { CgLogOut } from 'react-icons/cg';
import PropTypes from 'prop-types';
import LocaleButton from './LocaleButton';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function NoteAppHeaderMenu({ onLogout, name }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className='note-app__header-menu'>
      <div>
        <Link
          to='/archives'
          className='note-app__header-archive-link'
        >
          {localeData.archivesLink[locale]}
        </Link>
      </div>
      <div className='note-app__header-buttons'>
        <LocaleButton />
        <ThemeButton />
      </div>
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
