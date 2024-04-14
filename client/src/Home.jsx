import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import BannerComp from "./components/bannerComp.jsx";
import Products from "./components/Products.jsx";
import { productsData } from "./api/Api.jsx"; // Adjust the path as per your project structure

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsData(); // Call the productsData function
        setProducts(data); // Set the products state with the fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <>
      <BannerComp />
      <Products products={products} />
    </>
  );
};

export default Home;
