import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from './pages/About';
import House from './pages/House';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
