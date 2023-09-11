import logo from './logo.svg';
import {React, useState, useEffect, useRef} from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';  
import Button from '@mui/material/Button';  
import axios from 'axios'; 
import axiosInstance from './config/axiosInstance';

const item = {
  name: 'Alex Savage',
  description: 'This is a test item',
  price: 9.99,
  tax: 0.99
};





function App() {
  const [content, setContent] = useState('This is the content of the div');
  const div = useRef(null);

  function callApi() {
    axiosInstance.get('/api')
    .then(response => {
    setContent(response.data.message);
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error);
    });
  }

  // () => useEffect({
  //   callApi()
  // }, [])

  return (
    <div className="App">
      <Router>
      <NavBar/> 
      <Container ref={div} maxWidth="100vw">
      <header className="App-header" maxWidth ="100vw">
        <Routes >
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />}/>

          <Route path="/contact" element={<Contact />}/>

        </Routes>
        <div>{content}</div>
          <Button variant="contained" onClick={callApi}>Contained</Button>  

        </header>
      </Container>
      </Router>
      

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default App;
