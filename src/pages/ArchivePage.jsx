import React from 'react';
import NotesList from '../components/NotesList';
import NoteSearch from '../components/NoteSearch';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';
import localeData from '../utils/locale-data';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
      notes: null,
      initializing: true,
    };
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

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

  onUnarchiveNoteHandler = async (id) => {
    const { error } = await unarchiveNote(id);
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
              <h2>{localeData.archiveNotes[locale]}</h2>
              <NoteSearch onSearch={this.onSearchHandler} />
              <p>{localeData.loadingNotes[locale]}</p>
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
            <h2>{localeData.archiveNotes[locale]}</h2>
            <NoteSearch
              onSearch={this.onSearchHandler}
              placeholder={localeData.archiveNotesSearchPlaceholder[locale]}
            />
            {filteredNotes.length ? (
              <NotesList
                notes={filteredNotes}
                onDeleteNote={this.onDeleteNoteHandler}
                onArchiveNote={this.onUnarchiveNoteHandler}
              />
            ) : (
              <p className='notes-list__empty-message'>{localeData.noArchiveNotes[locale]}</p>
            )}
          </main>
        )}
      </LocaleConsumer>
    );
  }
}

export default ArchivePage;
