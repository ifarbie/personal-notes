import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailPageAction from '../components/DetailPageAction';
import DetailPageContent from '../components/DetailPageContent';
import { getNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function DetailPage({ onArchiveNote, onDeleteNote, onUnarchiveNote }) {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { locale } = useContext(LocaleContext);

  React.useEffect(() => {
    async function fetchNote() {
      setIsLoading(true);
      const { error, data } = await getNote(id);
      setIsLoading(false);

      if (error) return;
      setNote(data);
    }

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <main className='note-app__body'>
        <p className='detail-page__empty-message'>{localeData.loadingNote[locale]}</p>
      </main>
    );
  }

  if (!note)
    return (
      <main className='note-app__body'>
        <p className='detail-page__empty-message'>{localeData.notFoundNote[locale]}</p>
      </main>
    );

  return (
    <main className='note-app__body'>
      <section className='detail-page'>
        <DetailPageContent
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
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
  onArchiveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired,
};

export default DetailPage;
