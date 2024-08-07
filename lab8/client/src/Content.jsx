import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from './redux/CartSlice';
import { fetchProducts, fetchSizes, checkout } from './apiService';
import Size from './components/Size';
import Cart from './components/Cart';

function Content() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const products = useSelector((state) => state.products.items);
  const sizes = useSelector((state) => state.size.sizes);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSizes());
    
  }, [dispatch]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handlePickSize = (sizeId) => {
    setSelectedSize(sizeId);
  };

  const filteredProducts = selectedSize ? products.filter(product => product.categoriesSize === selectedSize) : products;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Cart Section */}
        <div className="lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>
          <Cart 
            handleRemoveItem={handleRemoveItem} 
            cartItems={cartItems} 
            cartTotal={cartTotal} 
            clearCart={clearCart} 
            dispatch={dispatch} 
            handleAddItem={handleAddItem} 
            addItem={addItem} 
            removeItem={removeItem} 
            checkout={checkout} 
          />
        </div>

        {/* Products Section */}
        <div className="flex-1 ">
          <Size sizes={sizes} handlePickSize={handlePickSize} selectedSize={selectedSize} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
                <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-2">{product.price.toLocaleString()} VND</p>
                  <p className="text-sm text-gray-700">Size {product.size}</p>
                </div>
                <button 
                  onClick={() => handleAddItem(product)} 
                  className="mt-4 bg-[#71B77D] text-white py-2 rounded"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
