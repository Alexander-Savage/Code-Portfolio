import '../styles/HomePage.css';
import React from 'react';

function HomePage() {
  return (
    <div>
      <div style={{height: '20vh'}}></div>
      <header className='home-header'>Welcome to the home page!</header>
      <p className='home-description'>
      This is my Coding portfolio where I can show off my skills to learn new languages quickly.
      <br/>
      This also shows my ability to develop a full stack website and deploy it!
      </p>
      <div className='card'>
        <div>Some cool text</div>
      </div>
      <div style={{height: '100vh'}}></div>
    </div>
  );
}

export default HomePage;
