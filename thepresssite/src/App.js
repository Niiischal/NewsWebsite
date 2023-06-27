import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  let apiKey=process.env.REACT_APP_NEWS_API
  return (
<>
<Router>
<Navbar/>
{/* <Home/> */}
<News apiKey={apiKey} key="general"  country="us" category="general"/>
</Router>
</>
  );
}

export default App;
