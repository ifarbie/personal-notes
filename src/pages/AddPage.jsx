import React from 'react';
import NoteInput from '../components/NoteInput';
import PropTypes from 'prop-types';

function AddPage({ onAddNote }) {
  return (
    <main className='note-app__body'>
      <NoteInput addNote={onAddNote} />
    </main>
  );
}

AddPage.propTypes = {
  onAddNote: PropTypes.func.isRequired
}

export default AddPage;
