import React from 'react';
import img from './Assets/banner.jpg';
import './Backdrop.css';


const Backdrop = () => {
  return(
    <div className='backdrop'>
      
      <img src={img} alt="" style={{ width: '100%', height: '710px' }} />
      
    </div>
  );
};

export default Backdrop;
