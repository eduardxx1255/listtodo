import React from 'react';
import './App.css';
import Header from './components/header';
import Input from './components/input';
import Pendiente from './components/pendiente';
import New from './components/new';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <New />
      {/* para hacer calis */}
      <Route exact path="/input" component={Input} />
      <Route exact path="/pendiente" component={Pendiente} />
    </Router>

  );
}

export default App;
