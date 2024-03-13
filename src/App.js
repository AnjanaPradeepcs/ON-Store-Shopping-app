import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        
      </Routes>
    </div>

  );
}

export default App;
