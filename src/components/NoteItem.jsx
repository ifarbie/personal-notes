import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({title, createdAt, body, id, onDeleteNote, onArchiveNote, onUnarchiveNote, archived}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} onUnarchiveNote={onUnarchiveNote} archived={archived}/>
        </div>
    );
}

export default NoteItem;
