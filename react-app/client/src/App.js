import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import Header from './components/Header';
import dotenv from  'dotenv'


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <ToastContainer />
        <Routes>

        <Route path="/" element= {<Home />} />
        <Route path = "/add" element = {<AddEdit />}/>
        <Route path = "/update/:id" element = {<AddEdit />}/>
       
        <Route path = "/about" element = {<About/>}/>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
