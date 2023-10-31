import '../styles/BreastCancerPredictor.css';
import React from 'react';
import python from '../images/python-code.jpg'

function BreastCancerPredictor() {
  return (
    <div>
      <a href="#" title="python-code">
      <h1>Here's a simple a.i. python predictor</h1>
        <img classname="python-image" alt="python code" src={python} height="500" width="700" />
        {/* Add a 'try me button' */}
      </a>    
    </div>
  );
}

export default BreastCancerPredictor;
