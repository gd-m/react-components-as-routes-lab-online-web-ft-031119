import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      {/*{code here}*/}
      <React.Fragment>
        <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route  path="/movies" component={Movies} />
        <Route  path="/actors" component={Actors} />
        <Route  path="/directors" component={Directors} />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App
