import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import { IoTrashBin } from 'react-icons/io5';

function DetailPageAction({ isArchived, id, onArchiveNote, onDeleteNote, onUnarchiveNote }) {
  const navigate = useNavigate();

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
        title={isArchived ? 'Unarchive' : 'Archive'}
        onClick={() => handleAction(isArchived ? 'unarchive' : 'archive')}
      >
        {isArchived ? <MdUnarchive /> : <MdArchive />}
      </button>
      <button
        className='action'
        title='Delete'
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
