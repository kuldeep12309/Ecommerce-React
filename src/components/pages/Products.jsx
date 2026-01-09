import { useDispatch } from "react-redux";
import useCustomQueries from "../hooks/useCustomQueries";
import { addToCart } from "../../app/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Products = () => {
  const { data: products,error,loader} = useCustomQueries("https://fakestoreapi.com/products");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-4xl text-blue-600"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold text-red-600">
          Check your internet connection
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="hover:scale-105 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex flex-col"
          >
            {/* Clickable Product Area */}
            <div
              className="flex flex-col flex-grow cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Product Image */}
              <div className="flex items-center justify-center p-4 h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col px-4 pb-4">
                <p className="text-sm font-medium light:text-black line-clamp-2 mb-2">
                  {product.title}
                </p>
                <p className="text-lg font-bold light:text-gray-900 mb-4">
                  ${product.price}
                </p>
              </div>
            </div>
            
            {/* Buttons: Add to Cart + Buy Now */}
            <div className="flex gap-2 px-4 pb-4">
              <button
                onClick={(e) => {
                  dispatch(addToCart(product));
                  navigate("/cart");
                }}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Add to Cart
              </button>

              {/* Buy Now → product details */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${product.id}`); 
                }}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
