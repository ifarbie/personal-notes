import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function NoteItemAction({ id, onDeleteNote, onArchiveNote, archived }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className='note-item__action'>
      <button
        className='note-item__delete-button'
        onClick={() => onDeleteNote(id)}
      >
        {localeData.delete[locale]}
      </button>
      <button
        className='note-item__archive-button'
        onClick={() => onArchiveNote(id)}
      >
        {!archived ? localeData.archive[locale] : localeData.move[locale]}
      </button>
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItemAction;
