import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from './ThemeButton';
import NoteAppHeaderTitle from './NoteAppHeaderTitle';
import NoteAppHeaderMenu from './NoteAppHeaderMenu';

function NoteAppHeader({ name, onLogout }) {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    onLogout();
  };

  return (
    <header className='note-app__header'>
      <NoteAppHeaderTitle />
      {!name ? <ThemeButton /> : null}
      {name ? <NoteAppHeaderMenu onLogout={onLogoutHandler} name={name} /> : null}
    </header>
  );
}

NoteAppHeader.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

export default NoteAppHeader;
