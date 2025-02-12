import './App.css';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { useEffect, useState } from 'react';


function App() {
const [isLanding , setIsLanding] = useState(false)

setTimeout(()=>{
  setIsLanding(true)
},3450)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLanding? <Landing/>:<LoadingAnimation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
