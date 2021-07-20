import React from 'react';
import './App.css';
import Words from './Words';
import ReusableForm from './ReusableForm';
import Header from './Header'
import WordControl from './WordControl';

function App() {
  return (
    <React.Fragment>
      {/* < Header /> */}
      <Words />
      <div className="inputForm">
      < ReusableForm/>
      </div>
    </React.Fragment>
  );
}

export default App;