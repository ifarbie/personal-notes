import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { addNote, archiveNote, deleteNote, getUserLogged, putAccessToken, unarchiveNote } from '../utils/network-data';
import { ThemeProvider } from '../contexts/ThemeContext';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);

            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
      themeContext: {
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.themeContext.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);

            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
    };
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    }
  }

  onDeleteNoteHandler = async (id) => {
    return await deleteNote(id);
  };

  onArchiveNoteHandler = async (id) => {
    return await archiveNote(id);
  };

  onUnarchiveNoteHandler = async (id) => {
    return await unarchiveNote(id);
  };

  onAddNoteHandler = async ({ title, body }) => {
    const { error } = await addNote({ title, body });

    if (error) {
      return alert('Gagal menambahkan catatan');
    }
  };

  onLogin = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  };

  onLogout = () => {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken('');
  };

  render() {
    if (this.state.initializing) return null;

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state.themeContext}>
          <NoteAppHeader />
          <Routes>
            <Route
              path='*'
              element={<LoginPage onLogin={this.onLogin} />}
            />
            <Route
              path='/register'
              element={<RegisterPage />}
            />
          </Routes>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state.themeContext}>
        <NoteAppHeader
          name={this.state.authedUser.name}
          onLogout={this.onLogout}
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/archives'
            element={<ArchivePage />}
          />
          <Route
            path='/notes/new'
            element={<AddPage onAddNote={this.onAddNoteHandler} />}
          />
          <Route
            path='/notes/:id'
            element={
              <DetailPage
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
      </ThemeProvider>
    );
  }
}

export default NoteApp;
