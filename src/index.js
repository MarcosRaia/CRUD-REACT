import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components';
import reportWebVitals from './reportWebVitals';
import Gerenciar from './Components/gerenciarContato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editar from './Components/editarContato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home />} />
      <Route exact path='/editarContato' element = {<Editar />} />
      <Route exact path='/gerenciarContato' element = {<Gerenciar />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
