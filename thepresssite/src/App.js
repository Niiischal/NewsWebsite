import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router, Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import News from './components/News';
function App() {
  let apiKey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress ]=useState(0)
  return (
<>
<Router>
<Navbar/>
<LoadingBar color='Red' height={3} progress= {progress}/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/home' element={<Home/>}/>
  <Route exact path='/general' element={<News key="general"  country="us" category="general" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/business' element={<News key="business"  country="us" category="business" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/entertainment' element={<News key="entertainment"  country="us" category="entertainment" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/sports' element={<News key="sports"  country="us" category="sports" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/health' element={<News key="health"  country="us" category="health" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/science' element={<News key="science"  country="us" category="science" setProgress={setProgress} apiKey={apiKey}/>}/>
  <Route exact path='/technology' element={<News key="technology"  country="us" category="technology" setProgress={setProgress} apiKey={apiKey}/>}/>
</Routes>
</Router>
</>
  );
}

export default App;
