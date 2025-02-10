import './App.css';
import Landing from './components/Landing';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import { useEffect, useState } from 'react';

function App() {
  // const [showApp, setShowApp] = useState(false);
  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setShowApp(true);
  //     }, 3500);

  //     return () => clearTimeout(timer);
  // }, []);
  return (
    <>
    <LoadingAnimation/>
    {/* {showApp &&<div className="App"> */}
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
