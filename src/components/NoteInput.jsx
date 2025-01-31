import React, { useContext } from 'react';
import FormNoteInput from './FormNoteInput';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function NoteInput({ addNote }) {
  const {locale} = useContext(LocaleContext);

  return (
    <section className='note-input'>
      <h2>{localeData.addPageParagraph[locale]}</h2>
      <FormNoteInput addNote={addNote} />
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
