import React from 'react';
import './Experience.css';


const Experience = ({number,title,style}) => {
  return (
  
    <a href="https://web345.ccbp.tech/" className="head1">
      <div style={{ ...style }} className='experience'>
        <h1>{number}</h1>
        <p>{title}</p>



      </div>
    </a>

  );
};

export default Experience;