import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NotesList({ notes, onDeleteNote, onArchiveNote }) {
  return (
    <section className='notes-list'>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          onDeleteNote={onDeleteNote}
          onArchiveNote={onArchiveNote}
          id={note.id}
          {...note}
        />
      ))}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};

export default NotesList;
