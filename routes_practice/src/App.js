import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Navigationbar from './componente/Navigationbar';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigationbar />}>
          <Route path='*' element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Notfound/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
