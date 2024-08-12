import React from 'react';
import CountPizza from './CountPizza/CountPizza';
import { PizzaProvider } from './PizzaContext/PizzaContext'; // Đảm bảo đường dẫn đúng

function Order() {
  const toppings = [
    { name: 'Cold cuts', price: 5, image: 'https://th.bing.com/th/id/OIP.eGz1eg9g4EO_TAzGCxsY2QHaHP?pid=ImgDet&w=474&h=463&rs=1' },
    { name: 'Pepperoni', price: 3.5, image: 'https://th.bing.com/th/id/OIP.2e81pBU27VRTYJMwDQh2wwHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { name: 'Feta', price: 2.5, image: 'https://png.pngtree.com/png-vector/20221119/ourlarge/pngtree-cheese-pizza-vector-art-png-image_6469745.png' },
    { name: 'Mozzarella', price: 1.5, image: 'https://png.pngtree.com/png-clipart/20231122/ourlarge/pngtree-pizza-cartoon-png-image_10676914.png' },
    { name: 'Swiss cheese', price: 3, image: 'https://png.pngtree.com/png-vector/20201125/ourlarge/pngtree-pizza-clipart-single-slice-flat-style-margarita-pizza-png-image_2462433.jpg' },
    { name: 'Spices', price: 0.5, image: 'https://png.pngtree.com/png-vector/20201125/ourlarge/pngtree-pizza-clipart-single-slice-flat-style-mushroom-bacon-pizza-png-image_2462425.jpg' },
    { name: 'Vegetables', price: 1.25, image: 'https://png.pngtree.com/png-vector/20240320/ourlarge/pngtree-slices-pizza-with-meat-and-campignons-topping-vector-png-image_12009190.png' },
  ];

  return (
    <PizzaProvider>
      <CountPizza toppings={toppings} />
    </PizzaProvider>
  );
}

export default Order;