import React from "react";
import Comment from "./comment";
 

const RightSidebar = ({ cart =[]}) => {
  
  const subtotal = cart.reduce((sum, item) => {
    
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.count;
  }, 0);
 
  return (
    <div
      className="right-sidebar"
      style={{
        flex: 1,
        background: "#1d1c27",
        padding: "10px",
        color: "white",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        maxHeight: "10000px",  
        overflowY: "auto",  
      }}
    >
       <h2 style={{ marginBottom: "20px" }}>Orders #34562</h2>

      <h3>🛒 Cart</h3>


      <div className="mycard">
      <div className="cart">
        <p>item</p>
       <div className="card">
        <p>Qty</p>
        <p>Price</p>
        </div>
        </div>
      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                background: "#1d1c27",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                style={{ borderRadius: "5px", objectFit: "cover" }}
              />
              <div>
                <p>{item.name}</p>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  {item.price}   
                </p>
                 
        <Comment />
                </div>
                <button
          style={{   
            padding: "12px",
            borderRadius: "8px",
            background: "#090e25",
            color: "white",
          }}
        >
          {item.count}
        </button>
                <p>
                {item.price} × {item.count}
                </p>
        
<button style={{ background: "#090e25", fontSize: "18px", cursor: "pointer", }}
                onClick={() => console.log("remove item logic here")}
              >
                🗑️
              </button>
            
            </div>
          ))
        )}
     </div>

       
      <div style={{ marginTop: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            background: "#ea736d",
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
