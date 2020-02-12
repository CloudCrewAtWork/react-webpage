import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import Search from './components/Search'
import Details from './components/Details'
import {BrowserRouter as  Router,Route,Link,} from "react-router-dom"
function App() {
  return (
    
    <Router>
    <div className="App">
      <Route path='/' exact component={Hello}/>
      <p>Hey friends how are you all doing!</p>
      <Route path='/' exact component={Search}/>
      <Route path='/:imdbID' exact component={Details}/>
      
    </div>
    </Router>
  );
}
export default App;
