import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import RightSidebar from './components/RightSidebar';
import Header from './components/Header';


function App() {
  return (
    <>
      <div className='Body'>
        
        <div className='head'>
        <Sidebar />
        <Header />
        <RightSidebar />
        </div>
      </div>
   </>
  );
}
export default App;