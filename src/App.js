import './App.css';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { useEffect, useState } from 'react';
import Skills from './components/Skills';


function App() {
const [isLanding , setIsLanding] = useState(false)

setTimeout(()=>{
  setIsLanding(true)
},3450)

useEffect(() => {
  const bgDiv = document.getElementById("bg");

  const handleMouseMove = (event) => {
    bgDiv.style.maskImage = `radial-gradient(${window.innerWidth < 826 ? '200px': '550px'} at ${event.clientX}px ${event.clientY}px, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%)`;
  };
  document.addEventListener("mousemove", handleMouseMove);
  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <div className="App">
      <div className='bg' id='bg'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLanding? <Landing/>:<LoadingAnimation />}></Route>
          {/* <Route path='/' element={<Skills/>}></Route> */}
          <Route path='/' element={<Landing/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
