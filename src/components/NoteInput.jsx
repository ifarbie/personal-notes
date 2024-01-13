import React from "react";
import FormNoteInput from "./FormNoteInput";

function NoteInput({addNote}) {
    return (
        <div className="note-input">
            <h2>Add a note</h2>
            <FormNoteInput addNote={addNote} />
        </div>
    )
}

export default NoteInput;