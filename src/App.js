import React from 'react';
import Navbar from './components/Nav/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        < Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' component={Home} />
          <Route path='/' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
  }

export default App;
