import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Fetchingdata from './components/Fetchingdata';
import Home from './components/Home'
import Navbar from './components/Navbar';
import SmallProject from './components/SmallProject';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fetchdata" element={<Fetchingdata/>}/>
        <Route path="/smallproject" element={<SmallProject/>}/>
      </Routes>
    </Router>
  )
}

export default App
