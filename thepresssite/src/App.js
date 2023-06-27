import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
<>
<Router>
<Navbar/>
{/* <Home/> */}
<News/>
</Router>
</>
  );
}

export default App;
