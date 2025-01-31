import React from 'react';
import PropTypes from 'prop-types';
import localeData from '../utils/locale-data';
import { LocaleConsumer } from '../contexts/LocaleContext';

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
      <LocaleConsumer>
        {({locale}) => {
          return <section className='note-search'>
            <input
              type='text'
              placeholder={this.props.placeholder || localeData.activeNotesSearchPlaceholder[locale]}
              value={this.state.keyword}
              onChange={this.onKeywordChangeEventHandler}
            />
          </section>;
        }}
      </LocaleConsumer>
    );
  }
}

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default NoteSearch;
