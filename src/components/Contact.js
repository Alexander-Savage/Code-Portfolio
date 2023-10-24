import React from 'react';
import '../styles/Contact.css'

function Contact() {
  return (

    
    <div>
      <h1>Contact Page</h1>
      
      <head>
          <link rel="stylesheet" type="text/css" href="styles.css"></link>
      </head>

      <a className='linkedin-logo'  href="../images/src/images/Instagram_logo_2016.png" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Profile" />
      </a>

      <a className='instagram-logo'  href="../images/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Profile"  />
      </a>


      {/* <a href="https://www.linkedin.com/in/alex-savage-3776a2216/">Linkedin!</a>

      <a href="https://instagram.com/savage.software?igshid=NzZlODBkYWE4Ng==">Instagram!</a> */}
      

    </div>
  );
}

export default Contact;
