import './App.css';
import Landing from './components/Landing';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import { useEffect, useState } from 'react';
import ContactMe from './components/Contact_me';

function App() {

  return (
    <>
    
      {/* <LoadingAnimation /> */}
      <div className="App">
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ContactMe />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
