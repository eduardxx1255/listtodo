import React from 'react';
import './App.css';
import Header from './components/header'
import Input from './components/input'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route exact path="/components/input" component={Input} />
    </Router>
  );
}

export default App;
