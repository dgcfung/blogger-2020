import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignIn from './components/SignIn'


function App() {
  return (
      <React.Fragment>

        {/* render routes here */}
        <Header/>
        <Route exact path="/" component={About}/>
        <Route exact path="/login/sign_in" component= {SignIn}/>
        
        <Footer/>
      </React.Fragment>
  );
}

export default App;
