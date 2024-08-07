const Cart = (props) => {
    const { cartItems, handleRemoveItem, cartTotal, clearCart, dispatch, addItem, removeItem, checkout } = props;

    const tang = (id) => {
        dispatch(addItem({ id }));
    };

    const giam = (id) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        if (cartItems.length <= 0) {
            return alert('Chưa có sản phẩm trong giỏ hàng');
        }
        dispatch(checkout(cartItems));
        alert('Thanh toán thành công');
    };

    return (
        <div>
        
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Hiện tại chưa có sản phẩm trong giỏ hàng</p>
            ) : (
                <div className="shadow-lg rounded-lg h-[500px] overflow-auto p-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="mb-6 border-b pb-4">
                            <img src={item.img} className="w-full h-40 object-cover rounded-lg mb-2" alt={item.name} />
                            <span className="block text-center text-lg font-medium">{item.name}</span>
                            <div className="flex items-center justify-center gap-4 my-2">
                                <button
                                    onClick={() => giam(item.id)}
                                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                    className="border-2 border-gray-300 w-12 text-center rounded-md"
                                />
                                <button
                                    onClick={() => tang(item.id)}
                                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                            <span className="block text-center text-lg font-medium">Giá tiền: {item.price * item.quantity} VND</span>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="bg-red-500 text-white w-full py-2 rounded-lg mt-2 hover:bg-red-600"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Tổng tiền: {cartTotal.toLocaleString()} VND</h2>
                <button
                    onClick={() => dispatch(clearCart())}
                    className="bg-red-400 text-white w-full py-3 rounded-lg mt-4 hover:bg-red-600"
                >
                    Xóa tất cả
                </button>
                <button
                    onClick={handleCheckout}
                    className="bg-[#71B77D] text-white w-full py-3 rounded-lg mt-4 hover:bg-green-600"
                >
                    Thanh toán
                </button>
            </div>
        </div>
    );
};

export default Cart;
