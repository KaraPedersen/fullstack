import { findAllByTestId } from '@testing-library/dom';
import { Component } from 'react';
import testUtils from 'react-dom/test-utils';
import './DogForm.css';

export default class DogForm extends Component {
  state = {
    name: '',
    type: '',
    // tvShows:
    url: '',
    year: '',
    isSidekick: false
  }

  componentDidMount() {
    const { dog } = this.props;
    if (!dog) { return; }

    this.setState(dog);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ typr: target.value });
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  render() {
    return (
      <div className="DogForm">
        
      </div>
    );
  }

}