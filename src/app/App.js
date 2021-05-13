import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import DogsPage from '../dogs/DogsPage';
import DogDetailPage from '../dog/DogDetailPage';
import DogAddPage from '../dog-add/DogAddPage';
import DogEditPage from '../dog-edit/DogEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/dogs" exact={true}
                render={routerProps => (
                  <DogsPage {...routerProps}/>
                )}
              />

              <Route path="/dog/add" exact={true}
                render={routerProps => (
                  <DogAddPage {...routerProps}/>
                )}
              />

              <Route path="/dogs/:id"
                render={routerProps => (
                  <DogDetailPage {...routerProps}/> 
                )}
              />

              <Route path="/dogs/:id/edit" exact={true}
                render={routerProps => (
                  <DogEditPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
