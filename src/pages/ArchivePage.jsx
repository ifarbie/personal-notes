import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import NoteSearch from '../components/NoteSearch';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
    }
  }

  onSearchHandler = ({ keyword }) => {
    this.setState({
      searchKeyword: keyword,
    });
  };

  render() {
    const filteredArchivedNotes = this.props.archivedNotes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    return (
      <main className='note-app__body'>
        <h2>Archived Notes</h2>
        <NoteSearch onSearch={this.onSearchHandler} placeholder='Search archived notes...' />
        {filteredArchivedNotes.length ? (
          <NotesList
            notes={filteredArchivedNotes}
            onDeleteNote={this.props.onDeleteNote}
            onArchiveNote={this.props.onArchiveNote}
          />
        ) : (
          <p className='notes-list__empty-message'>You haven&apos;t archived notes yet</p>
        )}
      </main>
    );
  }
}

ArchivePage.propTypes = {
  archivedNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};

export default ArchivePage;
