import React, { useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  let apiKey=process.env.REACT_APP_API
  const[progress,setProgress ]=useState(0)
  return (
<>
<Router>
<Navbar/>
<LoadingBar color='Red' height={3} progress= {progress}/>
{/* <Home/> */}
<News key="general"  country="us" category="general" setProgress={setProgress}/>
</Router>
</>
  );
}

export default App;
