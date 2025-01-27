import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';
import PropTypes from 'prop-types';

function NoteItem({ title, createdAt, body, id, onDeleteNote, onArchiveNote, archived }) {
  return (
    <article className='note-item'>
      <NoteItemContent
        title={title}
        createdAt={createdAt}
        body={body}
        id={id}
      />
      <NoteItemAction
        id={id}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        archived={archived}
      />
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
