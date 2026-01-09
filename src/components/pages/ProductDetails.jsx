import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCustomQueries from "../hooks/useCustomQueries";
import { addToCart } from "../../app/features/cartSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faStar } from "@fortawesome/free-solid-svg-icons";


const ProductDetails = () => {
  const { id } = useParams();    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: products, error, loader } = useCustomQueries("https://fakestoreapi.com/products");

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FontAwesomeIcon icon={faSpinner} spin className="text-3xl text-gray-600" />
      </div>
    );
  }

  if (error || !products) {
    return (
      <div className="text-center mt-12 text-red-500 text-lg">
        Something went wrong
      </div>
    );
  }
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return (
      <div className="text-center mt-12 text-red-500 text-lg">
        Product not found
      </div>
    );
  }
  // Related products
  const relatedProducts = products.filter((p) => p.id !== product.id);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-80 object-contain"
          />
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-2xl font-bold text-green-600">${product.price}</p>
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <span>
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
          )}
          <p className="text-gray-700">{product.description}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>{ dispatch(addToCart(product));
                navigate("/cart")}
              }
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                dispatch(addToCart(product));
                navigate("/cart");
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => navigate(`/product/${prod.id}`)}
              className="cursor-pointer border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="bg-gray-50 p-2 rounded-lg flex justify-center items-center w-full h-32 mb-2">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="max-h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center">{prod.title}</p>
              <p className="text-green-600 font-semibold mt-1">
                Price: ${prod.price}
              </p>

              {prod.rating && (
                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                  <FontAwesomeIcon icon={faStar} />
                  <span>rating: {prod.rating.rate}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
