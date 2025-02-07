import './App.css';
import Landing from './components/Landing';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
