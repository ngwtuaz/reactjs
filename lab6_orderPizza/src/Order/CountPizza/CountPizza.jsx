import React from "react";
import { usePizza } from '../PizzaContext/PizzaContext'; // Đảm bảo đường dẫn đúng

function CountPizza({ toppings }) {
  const { counts, handleCountChange, totalPrice } = usePizza(); //custom hook Lấy dữ liệu từ Context

  return (
    <div className="space-y-4">
      {toppings.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 mb-2">
          {counts[item.name] > 0 && (
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-12 h-12" 
            />
          )}
          <div className="flex-1">
            <strong>{item.name}</strong> - ${item.price}
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handleCountChange(item.name, -1)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              -
            </button>
            <div className="text-center w-8">
              {counts[item.name] || 0}
            </div>
            <button 
              onClick={() => handleCountChange(item.name, 1)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <strong>Total Price: ${totalPrice(toppings).toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default CountPizza;
