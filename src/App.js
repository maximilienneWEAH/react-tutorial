import React, {useState} from 'react';
import Sidebar from './sidebar';
import './App.css';
import RightSidebar from './components/RightSidebar';
import Header from './components/Header';

function App() {

  const [cart, setCart] = useState([]);
  return (
    <>
       
        <div className='head'>
        <Sidebar />
        <Header cart={cart} setCart={setCart} />
        <div className="right">
        <RightSidebar cart={cart} />
        </div>
        </div>
   </>
  );
}
export default App;
