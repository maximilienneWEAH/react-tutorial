// Container.js
import React from 'react';

const Container = ({ children, style }) => {
  return (
    <div style={{
      margin: '0 auto',
      paddingTop: '120px',
      backgroundColor: '#1d1c27',
      borderRadius: '20px',
      width:'300px',
      boxShadow: '0 0 10px rgba(255, 246, 246, 0.88)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      height: '250px'
    }}>
        
      {children}
      <button onclick="shoot()" style={{ backgroundColor: '#ea736d', width: '180px', height: '45px', borderRadius: '10px', boxShadow: '0 0 10px rgba(255, 246, 246, 0.88)', }}>Order Now</button>
    </div>
  );
};

export default Container;
