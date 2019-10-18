import React from 'react';
import './App.css';
import Header from './components/header'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Header} />
    </Router>
    
  );
}

export default App;
