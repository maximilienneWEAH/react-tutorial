import { useState, useEffect } from "react";

function usePersistentCart(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Load cart from localStorage (if available)
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default usePersistentCart;
