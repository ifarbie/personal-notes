import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import localeData from '../utils/locale-data';
import { LocaleConsumer } from '../contexts/LocaleContext';

function FormNoteInputWrapper({ addNote }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/');
  };

  return (
    <FormNoteInput
      navigateHandler={navigateHandler}
      addNote={addNote}
    />
  );
}

class FormNoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleLengthLimit: 50,
    };
  }

  onTitleChangeEventHandler = (event) => {
    if (event.target.value.length <= this.state.titleLengthLimit) {
      this.setState({
        title: event.target.value,
      });
    }
  };

  onBodyChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.addNote({ title, body });
    this.props.navigateHandler('/');
  };

  render() {
    return (
      <LocaleConsumer>
        {({locale}) => {
          return (
            <form onSubmit={this.onSubmitHandler}>
              <p className='note-input__title__char-limit'>
                {localeData.addPageRemainingTitle[locale]} <span>{this.state.titleLengthLimit - this.state.title.length}</span>
              </p>
              <input
                type='text'
                className='note-input__title'
                placeholder={localeData.addPageTitlePlaceholder[locale]}
                required
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              />
              <textarea
                type='text'
                className='note-input__body'
                placeholder={localeData.addPageBodyPlaceholder[locale]}
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
              ></textarea>
              <button type='submit'>{localeData.add[locale]}</button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

FormNoteInputWrapper.propTypes = {
  addNote: PropTypes.func.isRequired,
};

FormNoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  navigateHandler: PropTypes.func.isRequired,
};

export default FormNoteInputWrapper;
