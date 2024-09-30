import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData, createDate } from "../utils";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
        };
    }

    onDeleteNoteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

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
    }

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
    }

    onAddNoteHandler = ({ title, body }) => {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        title,
                        body,
                        id: +new Date(),
                        archived: false,
                        createdAt: createDate(),
                    },
                ],
            };
        });
    }

    onSearchHandler = ({ keyword }) => {
        this.setState({
            searchKeyword: keyword,
        })
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase());
        });

        return (
            <>
                <NoteAppHeader onSearch={this.onSearchHandler} />
                <NoteAppBody notes={filteredNotes} onAddNote={this.onAddNoteHandler} onDeleteNote={this.onDeleteNoteHandler} onArchiveNote={this.onArchiveNoteHandler} onUnarchiveNote={this.onUnarchiveNoteHandler} />
            </>
        );
    }
}

export default NoteApp;
