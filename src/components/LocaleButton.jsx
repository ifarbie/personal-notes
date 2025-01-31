import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function LocaleButton() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <div>
      <button className='locale-button' onClick={toggleLocale}>
        <p>{locale === 'id' ? 'ID' : 'EN'}</p>
      </button>
    </div>
  );
}

export default LocaleButton;
