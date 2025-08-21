import React, {useState, useEffect} from 'react';
import Sidebar from './sidebar';
import './App.css';
import RightSidebar from './components/RightSidebar';
import Header from './components/Header';

function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
 
  
  

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };


  return (
    <>
       
        <div className='head'>
        <Sidebar />
        <Header cart={cart} setCart={setCart}  />
        <div className="right">
        <RightSidebar cart={cart}  removeFromCart={removeFromCart} />
        </div>
        </div>
   </>
  );
}
export default App;
