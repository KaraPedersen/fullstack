import { Component } from 'react';
import { getDog } from '../utils/dogs-api';
import './DogDetailPage.css';

export default class DogDetailPage extends Component {
  state = {
    dog: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const dog = await getDog(match.params.id);
    if (dog) {
      this.setState({ dog: dog });
    }
    else {
      console.log('No dog received. Check id and network tab');
    }
  }
  
  render() {
    const { dog } = this.state;

    if (!dog) return null;

    return (

      <div className="DogDetail">
        <h2>Dog Detail Page</h2>

        <p>Dog name: {dog.name}</p>        
        <p>Dog Tv Show: {dog.tvShow}</p>        
        <p>Dog year: {dog.year}</p>        
        <p>Owner: {dog.username}</p>        
      </div>
    );
  }

}