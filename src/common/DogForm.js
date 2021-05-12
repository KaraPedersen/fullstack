import { Component } from 'react';
import './DogForm.css';

export default class DogForm extends Component {
  state = {
    name: '',
    type: '',
    tvShows: '',
    url: '',
    year: '',
    isSidekick: false
  }

  componentDidMount() {
    const { dog } = this.props;
    if (!dog) { return; }

    this.setState(dog);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeTvShows = ({ target }) => {
    this.setState({ tvShows: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ year: target.value });
  }

  handleChangeIsSidekick = ({ target }) => {
    this.setState({ isSidekick: target.checked });
  }  
  
  render() {
    const { name, type, tvShows, url, year, isSidekick } = this.state;
    const { dog } = this.props;

    return (
      <form className="DogForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Dog Name</span>
            <input name="name" required placeholder="Name of the famous dog..."
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Dog Type</span>
            <select name="type" required placeholder="Type (schnauzer, etc.)"
              value={type} onChange={this.handleChangeType}
            >
              <option value="" disabled>Type (
                Beagle, Schnauzer, etc.)</option>
              <option>Great Dane</option>
              <option>Bloodhound</option>
              <option>German Shepherd</option>
              <option>Beagle</option>
              <option>Dachshund and Terrier Mix</option>
              <option>Schnauzer Mix</option>
              <option>Coonhound</option>
              <option>Great Dane</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Tv Shows</span>
            <select name="Tv Shows" required
              value={tvShows} onChange={this.handleChangeLives}
            >
              <option>Scooby Doo, Where Are you?</option>
              <option>Mickey Mouse Clubhouse</option>
              <option>Bolt</option>
              <option>Charlie Brown and Snoopy</option>
              <option>The Garfield Show</option>
              <option>The Lady and the Tramp
              </option>
              <option>Goof Troop</option>
              <option>Scooby Doo</option>
              <option>1</option>
              <option>0</option>
            </select>
          </label>
        </p>
      
        <p>
          <label>
            <span>Dog Image Url</span>
            <input name="url" required placeholder="Url to image of dog"
              value={url} onChange={this.handleChangeUrl}
            />
          </label>
        </p>
      
        <p>
          <label>
            <span>Year Introduced</span>
            <input name="year" required pattern="\d{4}"
              title="Should be a four digit year like 2021"
              placeholder="Enter a four-digit year"
              value={year} onChange={this.handleChangeYear}
            />
          </label>
        </p>
      
        <p>
          <label>
            <span>Is a Sidekick?</span>
            <span className="vertically-centered">
              <input name="isSidekick"
                type="checkbox"
                value={isSidekick} onChange={this.handleChangeIsSidekick}
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{ dog ? 'Update' : 'Add'} Dog</button>
        </p>

      </form>
    );
  }
}