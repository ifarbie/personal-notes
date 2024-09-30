import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        }
    }

    onKeywordChangeEventHandler = (event) => {
        this.setState({
            keyword: event.target.value,
        });
        this.props.onSearch({keyword: event.target.value});
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" placeholder="Search note..." value={this.state.keyword} onChange={this.onKeywordChangeEventHandler} />
            </div>
        );
    }
}

export default NoteSearch;
