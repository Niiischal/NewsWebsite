import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
<>
<Router>
<Navbar/>
<Home/>
</Router>
</>
  );
}

export default App;
