import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogItem.css';

class DogItem extends Component {

  render() {
    const dog = this.props.dog;
    // console.log(dog);
    return (
      <li className="DogItem">
        <Link to={`/dogs/${dog.id}`}>
          <h2>{dog.name}</h2>
          <img src={dog.url} alt={dog.name}/>
          <p> Tv Shows: {dog.tvShow}</p>
        </Link>
      </li>
    );
  }
  
}

export default DogItem;