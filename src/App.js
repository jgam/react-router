import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';

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
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile}/>
    </div>
  );
}

export default App;
