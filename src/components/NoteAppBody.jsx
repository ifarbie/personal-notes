import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, onAddNote, onDeleteNote, onArchiveNote, onUnarchiveNote }) {
    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    return (
        <div className="note-app__body">
            <NoteInput addNote={onAddNote} />
            <h2>Active Notes</h2>
            {activeNotes.length 
                ? <NotesList notes={activeNotes} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />
                : <p className="notes-list__empty-message">No active notes here</p>}
            <h2>Archived Notes</h2>
            {archivedNotes.length 
                ? <NotesList notes={archivedNotes} onDeleteNote={onDeleteNote} onUnarchiveNote={onUnarchiveNote} /> 
                : <p className="notes-list__empty-message">You haven't archived notes yet</p>}
        </div>
    );
}

export default NoteAppBody;
