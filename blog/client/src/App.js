import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

// import {createUser}


class App extends Component {



  return (
      <React.Fragment>

        {/* render routes here */}
        <Header/>
        <Route exact path="/" component={About}/>
        <Route exact path="/login/sign_in" component= {SignIn}/>
       <Route exact path="/login/signup" component= {SignUp}/>
        
        <Footer/>
      </React.Fragment>
  );
}

export default App;
