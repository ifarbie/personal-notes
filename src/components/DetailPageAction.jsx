import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import { IoTrashBin } from 'react-icons/io5';

function DetailPageAction({ isArchived, id, onArchiveNote, onDeleteNote, onUnarchiveNote }) {
  const navigate = useNavigate();

  const handleAction = (actionType) => {
    if (actionType === 'archive') {
      onArchiveNote(id);
    } else if (actionType === 'unarchive') {
      onUnarchiveNote(id);
    } else if (actionType === 'delete') {
      onDeleteNote(id);
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
