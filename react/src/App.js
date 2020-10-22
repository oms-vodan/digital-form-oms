import React from 'react';
import './App.css';
import Routes from './routes';

import Navbar from './components/Navbar'

function App() {

  function IsLogged(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log(isLoggedIn);
    if(isLoggedIn) {
      return <Navbar />;
    } else {
      return '';
    }
  }

  return (
    <div id='full'>
      <IsLogged isLoggedIn={true}/>
      <Routes />
    </div>
  );
}

export default App;
