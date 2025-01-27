import React from 'react';
import PropTypes from 'prop-types'

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };
  }

  onKeywordChangeEventHandler = (event) => {
    this.setState({
      keyword: event.target.value,
    });
    this.props.onSearch({ keyword: event.target.value });
  };

  render() {
    return (
      <section className='note-search'>
        <input
          type='text'
          placeholder={this.props.placeholder || 'Search notes...'}
          value={this.state.keyword}
          onChange={this.onKeywordChangeEventHandler}
        />
      </section>
    );
  }
}

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default NoteSearch;
