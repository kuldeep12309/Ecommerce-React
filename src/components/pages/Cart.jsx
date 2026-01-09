import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { removeCart, clearCart, incrementItem, decrementItem } from "../../app/features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { totalItems, totalPrice } = useMemo(() => {
    let itemsCount = 0;
    let price = 0;

    for (const item of items) {
      itemsCount += item.quantity;
      price += item.price * item.quantity;
    }
    return {
      totalItems: itemsCount,
      totalPrice: price.toFixed(2),
    };
  }, [items]);


  if (items.length === 0) {
    return (
      <h2 className="text-center text-xl light:text-black dark:text-gray-700 mt-24">
        Your Amazon Cart is empty
      </h2>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 light:bg-white  text-sm sm:text-base  duration-300">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 light:text-white  transition-colors duration-300">
        Shopping Cart ({totalItems} items)
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">

        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-8  rounded shadow p-3 sm:p-4 transition-colors duration-300">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-3 sm:gap-4 border-b border-gray-300 dark:border-gray-700 py-3 last:border-b-0"
            >
              <div className="col-span-3 sm:col-span-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* Details */}
              <div className="col-span-9 sm:col-span-10">
                <h4 className=" sm:text-base font-medium light:text-black dark:text-gray-700 line-clamp-3 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-green-600 font-semibold mt-1 text-sm sm:text-base">
                  ${item.price}
                </p>

                {/* Quantity + Actions */}
                <div className="flex flex-wrap items-center gap-2 mt-2  " >
                  <div className="flex border rounded text-sm   transition-colors duration-300">
                    <button
                      onClick={() => dispatch(decrementItem(item.id))}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-white transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="px-3 py-1  text-white bg-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementItem(item.id))}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-white  transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeCart(item.id))}
                    className="text-xs sm:text-sm text-blue-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-3 text-red-600 hover:underline text-xs sm:text-sm"
          >
            Clear Cart
          </button>
        </div>
        {/* RIGHT: ORDER SUMMARY */}
        <div className="lg:col-span-4">
          <div className="light:bg-black  rounded shadow p-3 sm:p-4 sticky top-6 transition-colors duration-300">
            <h2 className="text-base sm:text-lg font-semibold mb-3 light:text-black dark:text-white transition-colors duration-300">
              Order Summary
            </h2>
            <div className="flex justify-between mb-1  transition-colors duration-300">
              <span>Items ({totalItems})</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between mb-1  transition-colors duration-300">
              <span>Delivery</span>
              <span className="text-green-600">FREE</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-base sm:text-lg  transition-colors duration-300">
              <span>Total</span>
              <span className="text-green-600">${totalPrice}</span>
            </div>
            <button className="w-full mt-3 sm:mt-4 text-black bg-yellow-500 hover:bg-yellow-500 py-2 rounded font-medium text-sm sm:text-base">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
