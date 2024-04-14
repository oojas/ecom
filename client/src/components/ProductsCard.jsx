import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addtoCart } from "../reduxSlice/luxehubSlice.jsx";
import { ToastContainer, toast } from "react-toastify";
//React component named ProductsCard that represents a card displaying product information.//
const ProductsCard = ({ product }) => {
  //In React, props are passed as an object, so when you destructure props in a functional component, we need to destructure them properly.(products)wrong ; ({products}) right
  //whenever we click on add to cart we want to dispatch an action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //This hook allows us to navigate between different pages or routes in our React application.

  //defines a function idString which converts the title property of the product object into a unique root ID.
  //This unique ID will be used for navigation or other purposes.

  const _id = product.title; //extracts the title property from the product object and assigns it to the variable _id.
  //Creating a Unique ID:
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  // This defines a function called idString that takes a parameter _id.Inside the function, it converts _id to a lowercase string (String(_id).toLowerCase()), splits it into an array of words using the space character as a separator (split(" ")), and then joins those words back together into a single string without spaces (join("")).
  //Essentially, this function takes a string (presumably a product title) and transforms it into a lowercase string without spaces, which is useful for creating a unique identifier.
  const rootId = idString(_id);
  //it generates a unique identifier (rootId) based on the product title (_id) by removing spaces and converting to lowercase.

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  //This function is invoked when the user clicks on the product card.
  //It navigates to the product details page (/product/${rootId}) and passes the product object as state data.

  return (
    <>
      <div className="group relative">
        <div
          onClick={handleDetails}
          className="w-full h-96 cursor-pointer overflow-hidden"
        >
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
            src={product.image}
            alt="productImg"
          />
        </div>
        <div className="w-full border-[1px] px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont text-base font-bold">
                {product.title}
              </h2>
            </div>
            <div className="text-sm relative w-28 flex justify-end overflow-hidden">
              <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                <p className="line-through text-gray-500">
                  ${product.oldPrice}
                </p>
                <p className="font-semibold">${product.Price}</p>
              </div>
              <p
                onClick={() => {
                  dispatch(
                    addtoCart({
                      _id: product._id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      quantity: 1,
                      description: product.description,
                    })
                  );
                  toast.success(`${product.title} is added`);
                  // now we have to show it in the cart, so for that, we will go to luxehubslice and pass the condition
                }}
                className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
              >
                Add to cart
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div>
            <p>{product.category}</p>
          </div>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default ProductsCard;
