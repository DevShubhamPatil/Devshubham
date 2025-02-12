import './App.css';
import Landing from './components/Landing';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import { useEffect, useState } from 'react';
import ContactMe from './components/Contact_me';
import { Link, Element } from 'react-scroll';

function App() {

  return (
    <>
    
      <LoadingAnimation />
      <div className="App">
        {/* <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ContactMe />}></Route>
            </Routes>
          </BrowserRouter>
        </div> */}
            <Navbar />
          <Element name='landing'>
            <Landing/>
          </Element>
          <Element name='contactme'>
            <ContactMe/>
          </Element>
      </div>
    </>
  );
}

export default App;
