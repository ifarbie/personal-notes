import React from 'react';
import NoteSearch from '../components/NoteSearch';
import NotesList from '../components/NotesList';
import HomePageAction from '../components/HomePageAction';
import { archiveNote, deleteNote, getActiveNotes } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
      notes: null,
      initializing: true,
    };
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => ({
      notes: data,
      initializing: false,
    }));
  }

  onSearchHandler = ({ keyword }) => {
    this.setState({
      searchKeyword: keyword,
    });
  };

  onDeleteNoteHandler = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      this.setState((prevState) => ({
        notes: prevState.notes.filter((note) => note.id !== id),
      }));
    }
  };

  onArchiveNoteHandler = async (id) => {
    const { error } = await archiveNote(id);
    if (!error) {
      this.setState((prevState) => ({
        notes: prevState.notes.filter((note) => note.id !== id),
      }));
    }
  };

  render() {
    if (this.state.initializing || !this.state.notes) {
      return (
        <LocaleConsumer>
          {({ locale }) => (
            <main className='note-app__body'>
              <h2>{localeData.activeNotes[locale]}</h2>
              <NoteSearch onSearch={this.onSearchHandler} />
              <p>{localeData.loadingNotes[locale]}</p>
              <HomePageAction />
            </main>
          )}
        </LocaleConsumer>
      );
    }

    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    return (
      <LocaleConsumer>
        {({ locale }) => (
          <main className='note-app__body'>
            <h2>{localeData.activeNotes[locale]}</h2>
            <NoteSearch onSearch={this.onSearchHandler} />
            {filteredNotes.length ? (
              <NotesList
                notes={filteredNotes}
                onDeleteNote={this.onDeleteNoteHandler}
                onArchiveNote={this.onArchiveNoteHandler}
              />
            ) : (
              <p className='notes-list__empty-message'>{localeData.noActiveNotes[locale]}</p>
            )}
            <HomePageAction />
          </main>
        )}
      </LocaleConsumer>
    );
  }
}

export default HomePage;
