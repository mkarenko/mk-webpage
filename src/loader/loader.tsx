import React from 'react';

import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className='loading-container'>
      <div className='loading-spinner'></div>
    </div>
  );
};

export default Loader;
