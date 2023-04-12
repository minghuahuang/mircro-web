import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import R from './views/R';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/r18' element={ <R /> } />
      </Routes>
    </div>
  );
}

export default App;
