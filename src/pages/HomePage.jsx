import React from 'react';
import PropTypes from 'prop-types';
import NoteSearch from '../components/NoteSearch';
import NotesList from '../components/NotesList';
import HomePageAction from '../components/HomePageAction';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
    };
  }

  onSearchHandler = ({ keyword }) => {
    this.setState({
      searchKeyword: keyword,
    });
  };

  render() {
    const filteredActiveNotes = this.props.activeNotes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    return (
      <main className='note-app__body'>
        <h2>Active Notes</h2>
        <NoteSearch onSearch={this.onSearchHandler} />
        {filteredActiveNotes.length ? (
          <NotesList
            notes={filteredActiveNotes}
            onDeleteNote={this.props.onDeleteNote}
            onArchiveNote={this.props.onArchiveNote}
          />
        ) : (
          <p className='notes-list__empty-message'>No active notes found</p>
        )}
        <HomePageAction />
      </main>
    );
  }
}

HomePage.propTypes = {
  activeNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};

export default HomePage;
