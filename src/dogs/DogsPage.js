import { Component } from 'react';
import { get } from 'superagent';
import DogList from '../DogList';
import { getDogs } from '../utils/dogs-api';
import './DogsPage.css';

export default class DogsPage extends Component {
  state = {
    dogs: []
  }

  async componentDidMount() {
    const dogs = await getDogs();
    if (dogs) {
      this.setState({ dogs: dogs });
    }
    else {
      console.log('No dogs received! Check network tab');
    }
  }
  render() {
    const { dogs } = this.state;

    return(
      <div className="DogsPage">
      <h2> List o Dogs</h2>

      <DogList dogs={dogs}/>

      </div>
      );
    }

  }
}