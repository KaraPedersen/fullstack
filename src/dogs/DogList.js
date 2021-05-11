import React, { Component } from 'react';
import DogItem from './DogItem';
import './DogList.css';

class DogList extends Component {
  
  render() {
    const { dogs } = this.props;

    return (
      <ul className="DogList">
        {dogs.map(dog => (
          <DogItem key={dog.id} dog={dog}/>
        ))}
      </ul>
    );
  }
  
}

export default DogList;