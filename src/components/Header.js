import React  from "react";
import SearchBox from "./SearchBox";
import FoodCard from "../components/cards/food-card";

  const Header = ({ cart, setCart }) => {
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

  const foodItems = [
    { id: 1, image: "/images/images.png", name: "Spicy seasoned seafood noodles", price: "$2.29", available: "20" },
    { id: 2, image: "/images/image 4.png", name: "Salted Pasta with mushroom sauce", price: "$2.29", available: "11" },
    { id: 3, image: "/images/images(1).png", name: "Beef dumpling in hot and sour soup", price: "$2.99", available: "16" },
    { id: 4, image: "/images/images(1).png", name: "Healthy noodle with spinach leaf", price: "$3.29", available: "22" },
    { id: 5, image: "/images/images(2).png", name: "Hot spicy fried rice with omelet", price: "$3.29", available: "13" },
    { id: 6, image: "/images/images(2).png", name: "Hot spicy fried rice with omelet", price: "$3.49", available: "17" },
    { id: 7, image: "/images/image 4(1).png", name: "Spicy instant noodle with special omelette", price: "$3.59", available: "17" }, 
    { id: 8, image: "/images/image 4(1).png", name: "Spicy instant noodle with special omelette", price: "$3.59", available: "17" }
  ];

  return (
    <div className="layout">
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

      {/* Food items */}
      <div className="containers">
        {foodItems.map((e) => (
          <FoodCard
            key={e.id}
            id={e.id}
            image={e.image}
            name={e.name}
            available={e.available}
            price={e.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

     
    </div>
  );
};

export default Header;
