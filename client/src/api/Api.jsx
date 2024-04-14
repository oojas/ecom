//This code defines an asynchronous function productsData() that retrieves product data from an external API using Axios,
//a popular library for making HTTP requests in JavaScript

import axios from "axios"; // Import axios library
export async function productsData() {
  try {
    const response = await axios.get(
      "https://fakestoreapiserver.reactbd.com/products"
    );
    console.log("API Response:", response.data); // Log the response data
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Throw the error to handle it in the calling code
  }
}
