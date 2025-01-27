import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import { getInitialData, createDate } from '../utils';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  onDeleteNoteHandler = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  };

  onArchiveNoteHandler = (id) => {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        } else {
          return note;
        }
      });
      return { notes: updatedNotes };
    });
  };

  onUnarchiveNoteHandler = (id) => {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id == id) {
          return { ...note, archived: false };
        } else {
          return note;
        }
      });
      return { notes: updatedNotes };
    });
  };

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            title,
            body,
            id: `notes-${+new Date()}`,
            archived: false,
            createdAt: createDate(),
          },
        ],
      };
    });
  };

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);

    return (
      <>
        <NoteAppHeader />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                activeNotes={activeNotes}
                onDeleteNote={this.onDeleteNoteHandler}
                onArchiveNote={this.onArchiveNoteHandler}
              />
            }
          />
          <Route
            path='/archives'
            element={
              <ArchivePage
                archivedNotes={archivedNotes}
                onDeleteNote={this.onDeleteNoteHandler}
                onArchiveNote={this.onUnarchiveNoteHandler}
              />
            }
          />
          <Route
            path='/notes/new'
            element={<AddPage onAddNote={this.onAddNoteHandler} />}
          />
          <Route
            path='/notes/:id'
            element={
              <DetailPage
                notes={this.state.notes}
                onArchiveNote={this.onArchiveNoteHandler}
                onDeleteNote={this.onDeleteNoteHandler}
                onUnarchiveNote={this.onUnarchiveNoteHandler}
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </>
    );
  }
}

export default NoteApp;
