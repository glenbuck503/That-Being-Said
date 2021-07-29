import React from 'react';
import './App.css';
import Main from './Main';
import Header from './Header'


function App() {
  return (
    <React.Fragment>
      < Header />
      <div className="inputForm">
      < Main/>

      </div>
    </React.Fragment>
  );
}

export default App;