import React from 'react';
import '../styles/Contact.css'

function Contact() {
  return (

    
    <div>
      <h1>Contact Page</h1>
      
      {/* <head>
          <link rel="stylesheet" type="text/css" href="styles.css"></link>
      </head> */}

      <a className='linkedin-logo'  href="https://www.linkedin.com/in/alex-savage-3776a2216/" rel="noopener noreferrer" target="_blank" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Profile" height="100" width="100"/>
      </a>

      <a className='instagram-logo'  href="https://www.instagram.com/savage.software/?igshid=NzZlODBkYWE4Ng%3D%3D" rel="noopener noreferrer" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Profile" height="100" width="100" />
      </a>

    </div>
  );
}

export default Contact;
