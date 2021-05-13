import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <header>
          <h2>Welcome to Famous Dogs</h2>
        </header>
       
        <Link to='/dogs'>
          <img className="logo" 
            alt="famous dogs logo" 
            src="/dogs/famous-dogs.png"/>
            
          See the List
        </Link>
      </div>
    );
  }

}