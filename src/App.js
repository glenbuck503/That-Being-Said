import React from 'react';
import './App.css';
import ReusableForm from './ReusableForm';
import Header from './Header'


function App() {
  return (
    <React.Fragment>
      < Header />
      <div className="inputForm">
      < ReusableForm/>

      </div>
    </React.Fragment>
  );
}

export default App;