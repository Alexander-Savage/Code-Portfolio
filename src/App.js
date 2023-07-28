import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/> 
      <Container maxWidth="100vw">
      <header className="App-header" maxWidth ="100vw">
        <Routes >
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />}/>

          <Route path="/contact" element={<Contact />}/>

        </Routes>
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
