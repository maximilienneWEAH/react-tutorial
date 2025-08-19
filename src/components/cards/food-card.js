import React from 'react'
import Container from "../container";

// see how u pas the item properited to the component
const FoodCard = ({ handleAddToCart, id, name, price, available, image }) => {
  const item = { id, name, price, available, image };

  return (
    <Container item={item} onAddToCart={handleAddToCart}>
      <img src={image} alt={name} width={100} />
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{available} Bowls available.</p>
    </Container>
  );
};

export default FoodCard;

/*<--!const FoodCard = ({ handleAddToCart, name, price, available, image }) => {
    return (
        <Container
            item={{ id: 1, name: "Beef dumpling in hot and sour soup" }}
            onAddToCart={handleAddToCart}
        >
            <img src={`${image}`} alt="img3" width={100} />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{available} Bowls available.</p>
        </Container>
        
    )
}

export default FoodCard*/