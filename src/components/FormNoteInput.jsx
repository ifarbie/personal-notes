import React from "react";

class FormNoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            titleLengthLimit: 50,
        };
    }

    onTitleChangeEventHandler = (event) => {
        if (event.target.value.length <= this.state.titleLengthLimit) {
            this.setState({
                title: event.target.value,
            });
        }
    }

    onBodyChangeEventHandler = (event) => {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        this.props.addNote({ title, body });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">
                    Remaining characters: <span>{this.state.titleLengthLimit - this.state.title.length}</span>
                </p>
                <input type="text" className="note-input__title" placeholder="Your note title's" required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea type="text" className="note-input__body" placeholder="Write your note here..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default FormNoteInput;
