import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router, Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Home from "./components/Home";
import Navbar1 from './components/Navbar1';
import News from './components/News';
function App() {
  let apiKey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress ]=useState(0)
  return (
<>
<Router>
<Navbar1/>
<LoadingBar color='Red' height={3} progress= {progress}/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/home' element={<Home/>}/>
  <Route exact path='/general' element={<News key="general"  country="us" category="general" setProgress={setProgress}/>}/>
  <Route exact path='/business' element={<News key="business"  country="us" category="business" setProgress={setProgress}/>}/>
  <Route exact path='/entertainment' element={<News key="entertainment"  country="us" category="entertainment" setProgress={setProgress}/>}/>
  <Route exact path='/sports' element={<News key="sports"  country="us" category="sports" setProgress={setProgress}/>}/>
  <Route exact path='/health' element={<News key="health"  country="us" category="health" setProgress={setProgress}/>}/>
  <Route exact path='/science' element={<News key="science"  country="us" category="science" setProgress={setProgress}/>}/>
  <Route exact path='/technology' element={<News key="technology"  country="us" category="technology" setProgress={setProgress}/>}/>
</Routes>
</Router>
</>
  );
}

export default App;
