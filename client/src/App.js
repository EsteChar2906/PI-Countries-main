import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import landingPage from './Components/landingPage/landingPage.jsx'
import Home from './Components/home/home.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={landingPage} />
      <Route path="/countries"> 
      <Home />
      </Route > 

    </div>
  );
}

export default App;
