import React from 'react'
import Container from "../container";

// see how u pas the item properited to the component
const FoodCard = ({ handleAddToCart, name, price, available, image }) => {
    return (
        <Container
            item={{ id: 3, name: "Beef dumpling in hot and sour soup" }}
            onAddToCart={handleAddToCart}
        >
            <img src={`${image}`} alt="img3" width={100} />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{available} Bowls available.</p>
        </Container>
    )
}

export default FoodCard