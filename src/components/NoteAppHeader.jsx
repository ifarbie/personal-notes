import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from './ThemeButton';
import NoteAppHeaderTitle from './NoteAppHeaderTitle';
import NoteAppHeaderMenu from './NoteAppHeaderMenu';
import LocaleButton from './LocaleButton';

function NoteAppHeader({ name, onLogout }) {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    onLogout();
  };

  return (
    <header className='note-app__header'>
      <NoteAppHeaderTitle />
      {!name ? (
        <section className='note-app__header-buttons'>
          <LocaleButton />
          <ThemeButton />
        </section>
      ) : null}
      {name ? (
        <NoteAppHeaderMenu
          onLogout={onLogoutHandler}
          name={name}
        />
      ) : null}
    </header>
  );
}

NoteAppHeader.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

export default NoteAppHeader;
