import React from 'react';
import './App.css';
import Header from './components/header'
import Input from './components/input'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/Input" component={Input} />
      <Route exact path="/animation" containers={Animation} />
    </Router>
  );
}

export default App;
