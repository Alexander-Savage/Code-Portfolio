import '../styles/BreastCancerPredictor.css';
import React from 'react';
import python from '../images/python-code.jpg'

function BreastCancerPredictor() {
  return (
    <div>
      <a href="#" title="python-code">
        <img classname="python-image" alt="python code" src={python}  />
      </a>    
    </div>
  );
}

export default BreastCancerPredictor;
