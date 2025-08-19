import React from "react";
 

const RightSidebar = ({ cart =[]}) => {
  
  const subtotal = cart.reduce((sum, item) => {
    // Convert "$2.29" → 2.29
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
                background: "#2a2935",
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
                  {item.price} × {item.count}
                </p>
              </div>
          
<button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={() => console.log("remove item logic here")}
              >
                🗑️
              </button>
            </div>
          ))
        )}
     

      {/* Footer with subtotal */}
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
