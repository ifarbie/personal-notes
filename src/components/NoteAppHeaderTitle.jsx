import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function NoteAppHeaderTitle() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div>
      <Link
        to='/'
        className='note-app__header-title'
      >
        {localeData.titleApp[locale]}
      </Link>
    </div>
  );
}

NoteAppHeaderTitle.propTypes = {};

export default NoteAppHeaderTitle;
