import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutBlogger from './components/AboutBlogger'


function App() {
  return (
      <React.Fragment>

        {/* render routes here */}
        <Header/>
        <Route exact path="/" component={AboutBlogger}/>
        <Footer/>
      </React.Fragment>
  );
}

export default App;
