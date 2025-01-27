import React from 'react';
import PropTypes from 'prop-types';

function NoteItemAction({ id, onDeleteNote, onArchiveNote, archived }) {
  return (
    <div className='note-item__action'>
      <button
        className='note-item__delete-button'
        onClick={() => onDeleteNote(id)}
      >
        Delete
      </button>
      <button
        className='note-item__archive-button'
        onClick={() => onArchiveNote(id)}
      >
        {!archived ? 'Archive' : 'Move'}
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
