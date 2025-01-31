import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import { IoTrashBin } from 'react-icons/io5';
import LocaleContext from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

function DetailPageAction({ isArchived, id, onArchiveNote, onDeleteNote, onUnarchiveNote }) {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  const handleAction = async (actionType) => {
    if (actionType === 'archive') {
      await onArchiveNote(id);
    } else if (actionType === 'unarchive') {
      await onUnarchiveNote(id);
    } else if (actionType === 'delete') {
      await onDeleteNote(id);
    } else {
      throw Error('Invalid action type');
    }
    navigate('/');
  };

  return (
    <div className='detail-page__action'>
      <button
        className='action'
        title={isArchived ? localeData.move[locale] : localeData.archive[locale]}
        onClick={() => handleAction(isArchived ? 'unarchive' : 'archive')}
      >
        {isArchived ? <MdUnarchive /> : <MdArchive />}
      </button>
      <button
        className='action'
        title={localeData.delete[locale]}
        onClick={() => handleAction('delete')}
      >
        <IoTrashBin />
      </button>
    </div>
  );
}

DetailPageAction.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired,
};

export default DetailPageAction;
