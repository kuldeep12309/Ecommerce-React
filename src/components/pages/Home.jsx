import { useNavigate } from "react-router-dom";
import useCustomQueries from "../hooks/useCustomQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const {data: products,error,loader,} = useCustomQueries("https://fakestoreapi.com/products");

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-[80px]">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-4xl text-blue-500"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[80] text-red-500 text-lg">
        Check pxyour internet connection
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="hero"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 text-white px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shop Smart. Live Better.
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Click any product image to view details and buy instantly.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-950 hover:bg-blue-800 text-white font-semibold px-4 py-3 rounded-full transition-colors duration-200"
          >
            Explore Products
          </button>
        </div>
      </section>
      <hr />

      <section className="px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-6">Best Sellers</h2>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-shrink-0 w-48 h-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>
      <hr />
      
      <section className="px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-6">Pre Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-48 object-contain rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm font-medium text-center">
                {product.title}
              </p>
              <p className="mt-1 text-green-600 font-semibold text-center">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>
      <hr />
      
      <section className="px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-6">New Sellers</h2>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-shrink-0 w-48 h-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
