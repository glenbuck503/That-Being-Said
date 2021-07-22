import React from 'react';
import './App.css';
import Words from './Words';
import ReusableForm from './ReusableForm';
import Header from './Header'
import WordControl from './WordControl';

function App() {
  return (
    <React.Fragment>
      < Header />
     
      <div className="inputForm">
      < ReusableForm/>
      <Words />
      <WordControl />
      </div>

    
    </React.Fragment>
  );
}

export default App;