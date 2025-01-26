import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import Login from './components/Login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
