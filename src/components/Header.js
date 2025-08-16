import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Container from "./container";
 
const Header = () => {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].count += 0.5;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  return (
    <div>
      <div className="header">
        <div className="first">
          <h1>Riverside Flamez</h1>
          <p>Tuesday, 2 Feb 2021</p>
          <nav>
            <ul>
              <li>Hot Dishes</li> 
              <li>Cold Dishes</li>
              <li>Soup</li>
              <li>Grill</li>
              <li>Appetizer</li>
              <li>Dessert</li>
            </ul>
          </nav>
          <hr />
        </div>
        <div className="search">
          <SearchBox />
        </div>
      </div>

      <div className="tittle">
        <h1>Choose Dishes</h1>
        <button
          onClick={() => console.log("Filter Cheapers")}
          style={{
            backgroundColor: "#1d1c27",
            width: "180px",
            height: "45px",
            borderRadius: "10px",
            color: "rgb(231, 216, 216)",
          }}
        >
          Cheapers
        </button>
      </div>

      <div className="containers">
        <Container
          item={{ id: 1, name: "Spicy seasoned seafood noodles", price: "2.29" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/image 4.png" alt="img1" width={100} />
          <h1>Spicy seasoned seafood noodles</h1>
          <h2>$2.29</h2>
          <p>20 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 2, name: "Salted Pasta with mushroom sauce" }}
          onAddToCart={handleAddToCart}
        >
          <img src="./images/images(1).png" alt="img2" width={100} />
          <h1>Salted Pasta with mushroom sauce</h1>
          <h2>$2.29</h2>
          <p>11 Bowls available</p>
        </Container>

        <Container
          item={{ id: 3, name: "Beef dumpling in hot and sour soup" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/image 4.png" alt="img3" width={100} />
          <h1>Beef dumpling in hot and sour soup</h1>
          <h2>$2.99</h2>
          <p>16 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 4, name: "Beef dumpling in hot and sour soup" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/images(2).png" alt="img4" width={100} />
          <h1>Beef dumpling in hot and sour soup</h1>
          <h2>$2.99</h2>
          <p>16 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 5, name: "Healthy noodle with spinach leaf" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/images(1).png" alt="img5" width={100} />
          <h1>Healthy noodle with spinach leaf</h1>
          <h2>$3.29</h2>
          <p>22 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 6, name: "Hot spicy fried rice with omelet" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/image 4.png" alt="img6" width={100} />
          <h1>Hot spicy fried rice with omelet</h1>
          <h2>$3.49</h2>
          <p>13 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 7, name: "Spicy instant noodle with special omelette" }}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/images.png" alt="img7" width={100} />
          <h1>Spicy instant noodle with special omelette</h1>
          <h2>$3.59</h2>
          <p>17 Bowls available.</p>
        </Container>

        <Container
          item={{ id: 8, name: "Spicy instant noodle with special omelette", price: 3.59}}
          onAddToCart={handleAddToCart}
        >
          <img src="/images/image 4.png" alt="img8" width={100} />
          <h1>Spicy instant noodle with special omelette</h1>
          <h2>$3.59</h2>
          <p>17 Bowls available.</p>
        </Container>
      </div>


 <div style={{ background: "#eee", padding: "5px", marginTop: "10px" }}>
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              {item.name} - price: {item.price} - Count: {item.count}
            </div>
          ))
        )}
        </div> 

    </div>
  );
};
export default Header;