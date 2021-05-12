import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <img className="logo"
          alt="famous dogs logo"
          src="famous-dogs.png"
        />

        <h1>Famous Dogs</h1>
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/dogs" exact={true}>Dogs</NavLink>
          <NavLink to="/dogs/add">Add Dog</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;