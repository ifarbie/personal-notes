import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function NoteItemContent({ id, title, createdAt, body }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <Link
      to={`/notes/${id}`}
      className='note-item__content'
    >
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt, locale)}</p>
      <p className='note-item__body'>{body}</p>
    </Link>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
