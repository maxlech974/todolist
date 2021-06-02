import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'src/components/Header'
import Main from 'src/components/Main'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
