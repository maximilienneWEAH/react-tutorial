import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import RightSidebar from './components/RightSidebar';
import Header from './components/Header';

function App() {
  return (
    <>
       
        <div className='head'>
        <Sidebar />
        <Header />
        <div className="right">
        <RightSidebar />
        </div>
        </div>
   </>
  );
}
export default App;