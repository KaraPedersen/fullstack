import { Component } from 'react';
import DogForm from '../common/DogForm';
import { getDog, updateDog } from '../utils/dogs-api';
import './DogEditPage.css';

export default class DogEditPage extends Component {
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

    handleUpdate = async dog => {
      const { history } = this.props;

      try {
        this.setState({ loading: true });
        const updatedDog = await updateDog(dog);
        history.push(`/dogs/${updatedDog.id}`);
      }
      catch (err) {
        
        this.setState({ loading: false });
      }
    }

    render() {
      const { dog } = this.state;

      return (
        <div className="DogEditPage">
          <h2>Edit Dog</h2>

          {dog && <DogForm dog={dog} onSubmit={this.handleUpdate}/>}
        </div>
      );
    }

}