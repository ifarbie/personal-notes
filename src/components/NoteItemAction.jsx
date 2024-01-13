import React from "react";

function NoteItemAction({id, onDeleteNote, onArchiveNote, archived, onUnarchiveNote}) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDeleteNote(id)}>Delete</button>
            {!archived 
            ? <button className="note-item__archive-button" onClick={() => onArchiveNote(id)}>Archive</button>
            : <button className="note-item__archive-button" onClick={() => onUnarchiveNote(id)}>Move</button>}
        </div>
    );
}

export default NoteItemAction;