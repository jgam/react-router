import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';
import WithRouterSample from './components/WithRouterSample';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">intro</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert profile</Link>
        </li>
        <li>
          <Link to="/profile/jgam">jgam profile</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample} />
      <WithRouterSample />
    </div>
  );
}

export default App;
