// PizzaContext.js
import { createContext, useState, useContext } from 'react';

// Tạo Context
const PizzaContext = createContext();

// Tạo Provider
export function PizzaProvider({ children }) {
  const [counts, setCounts] = useState({});

  // Hàm để thay đổi số lượng topping
  const handleCountChange = (name, change) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [name]: Math.max(0, (prevCounts[name] || 0) + change)
    }));
  };

  // Tính tổng giá tiền
  const totalPrice = (toppings) => {
    return toppings.reduce((total, item) => {
      return total + (item.price * (counts[item.name] || 0));
    }, 0);
  };

  return (
    <PizzaContext.Provider value={{ counts, handleCountChange, totalPrice }}>
      {children}
    </PizzaContext.Provider>
  );
}

// Hook để sử dụng Context
export const usePizza = () => useContext(PizzaContext);
