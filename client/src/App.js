import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './Components/landingPage/landingPage.jsx';
import Home from './Components/home/home.jsx';
import DetailCountries from './Components/detailCountries/detailCountries.jsx';
import Activities from './Components/createActivities/activities.jsx'

function App() {
  return (
    <div className="App">
      <Route 
      exact 
      path="/" 
      component={LandingPage} />
      <Route 
      exact
      path="/countries"
      component={Home} />
      <Route 
      exact
      path="/countries/:id"
      component={DetailCountries} />
      <Route
      exact
      path="/activities"
      component={Activities} />
    </div>
  );
}

export default App;
