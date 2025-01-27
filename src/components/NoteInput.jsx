import React from 'react';
import FormNoteInput from './FormNoteInput';
import PropTypes from 'prop-types';

function NoteInput({ addNote }) {
  return (
    <section className='note-input'>
      <h2>Add a note</h2>
      <FormNoteInput addNote={addNote} />
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
