import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/Signin';
import Counsellor from './components/Counsellor';
import Appointment from './components/Appointment';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Fetchregistration from './components/Fetchregistration';
import SignUpSuccessful from './components/SignUpSuccess';
import HomePage from './components/HomePage';
import Logout from './components/Logout';






// Placeholder components (replace them with your actual components)
const Homecomponent = () => <div>Home Component</div>;
const VisitorComponent = () => <div>Visitor Component</div>;

function App () {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Signup' element={<Signup />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/AddCounsellor' element={<Counsellor />} exact />
          <Route path='/appointment' element={<Appointment/>} exact />
          <Route path='/contactus' element={<Contactus/>} exact />
          <Route path='/Fetchregistration' element={<Fetchregistration/>} exact />
          <Route path='/sign-up-success' element={<SignUpSuccessful/>} exact />
          <Route path='/home-page' element={<HomePage/>} exact />
          <Route path='/logout' element={<Logout/>} exact />
          
                 
         
          


        </Routes>
      </main>

    </React.Fragment>
  );
}

export default App;