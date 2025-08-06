// Container.js
import React from 'react';

const Container = ({ children, style }) => {
  return (
    <div style={{
      backgroundColor: '#1d1c27',
      borderRadius: '20px',
      width:'200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '10px',
      color: 'rgb(218, 219, 219)',
      textAlign: 'center'
    }}>
        
      {children}
      <button onclick="shoot()" style={{ backgroundColor: '#ea736d', width: '180px', height: '45px', borderRadius: '10px', boxShadow: '0 0 10px rgba(255, 246, 246, 0.88)', color: 'rgb(231, 216, 216)' }}>Order Now</button>
    </div>
  );
};

export default Container;
