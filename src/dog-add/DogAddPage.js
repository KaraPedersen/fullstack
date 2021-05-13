import { Component } from 'react';
import DogForm from '../common/DogForm';
import { addDog } from '../utils/dogs-api';
import './DogAddPage.css';

export default class DogAddPage extends Component {
    state = {
      loading: false
    }

    handleAdd = async dogToAdd => {
      const { history } = this.props;
      console.log(dogToAdd);
      try {
        this.setState({ loading: true });

        const newDog = await addDog(dogToAdd);

        history.push(`/dogs/${newDog.id}`);
      }
      catch (err) {
        this.setState({ loading: false });
        console.log(err.message);
      }
    }

    render() {

      return (
        <div className="DogAddPage">
          <h2>Add A Dog</h2>
          <DogForm onSubmit={this.handleAdd}/>        
        </div>
      );
    }

}