import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getDog, deleteDog } from '../utils/dogs-api';
import './DogDetailPage.css';

export default class DogDetailPage extends Component {
  state = {
    dog: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const dog = await getDog(match.params.id);
      this.setState({ dog: dog });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  handleDelete = async () => {
    const { dog } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${dog.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading : true });
      await deleteDog(dog.id);
      history.push('/dogs');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading : false });
    }
  }

  render() {
    const { dog, loading } = this.state;

    if (!dog) return null;

    return (
      <div className="DogDetailPage">
        <Loader loading={loading}/>

        <h2>{dog.name}</h2>

        <img src={dog.url} alt={dog.name}/>

        <p>Introduced in {dog.year}</p>
        <p>Has {dog.tvShows} {dog.tvShows === 1 ? 'show' : 'tvShows' } remaining</p>
        {dog.isSidekick && 'This dog is a sidekick'}
        <p>Owned by user "{dog.userName}"</p>

        <Link to={`/dogs/${dog.id}/edit`}>
          Edit this Dog
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Dog
        </button>
      </div>
    );
  }

}