import React from 'react';
import './App.css';
import Routes from './routes';

import Navbar from './components/Navbar'

function App() {

  function IsLogged(props) {
    return <Navbar />;
  }

  return (
    <div id='full'>
      <IsLogged isLoggedIn={null}/>
      <Routes />
    </div>
  );
}

export default App;
