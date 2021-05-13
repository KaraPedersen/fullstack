import { Component } from 'react';
import DogList from './DogList';
import Loader from '../common/Loader';
import { getDogs } from '../utils/dogs-api';
import './DogsPage.css';

export default class DogsPage extends Component {
  state = {
    dogs: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const dogs = await getDogs();
      this.setState({ dogs: dogs });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { dogs, loading } = this.state;

    return (
      <div className="DogsPage">
        <Loader loading={loading}/>

        <h2>List o' Dogs</h2>

        <DogList dogs={dogs}/>

      </div>
    );
  }

}
