import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailPageAction from '../components/DetailPageAction';
import DetailPageContent from '../components/DetailPageContent';

function DetailPage({ notes, onArchiveNote, onDeleteNote, onUnarchiveNote }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (!note)
    return (
      <main className='note-app__body'>
        <p className='detail-page__empty-message'>Note not found</p>
      </main>
    );

  return (
    <main className='note-app__body'>
      <section className='detail-page'>
        <DetailPageContent title={note.title} createdAt={note.createdAt} body={note.body}/>
        <DetailPageAction
          isArchived={note.archived}
          id={id}
          onArchiveNote={onArchiveNote}
          onDeleteNote={onDeleteNote}
          onUnarchiveNote={onUnarchiveNote}
        />
      </section>
    </main>
  );
}

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired
};

export default DetailPage;
