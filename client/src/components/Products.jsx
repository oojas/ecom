import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  // Handle case where products array is undefined//By adding this error handling logic,the component will display
  // a message when the products array is undefined, preventing the map function from throwing an error.
  if (!products) {
    return (
      <div className="py-10">
        <p>No products available</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl text-gray-700 py-2 w-70 text-center hover:text-pink-600">
          Step into Luxury: The LuxeHub Experience
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[600px] text-l text-gray-600 text-center  hover:text-pink-600">
          Experience the epitome of luxury at LuxeHub, where every visit is
          memorable. Explore our carefully selected range of high-quality
          services and products, designed to surpass your expectations. Uncover
          true sophistication and treat yourself to the best at LuxeHub.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
