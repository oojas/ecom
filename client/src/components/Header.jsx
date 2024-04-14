import React from "react";
import { useSelector } from "react-redux";
import { bag, logoHub } from "../assets/index";
import { Link } from "react-router-dom";
const Header = () => {
  //allows the component to access the productData slice of the Redux state, enabling it to retrieve and use product-related data from the Redux store within the component.//
  const productData = useSelector((state) => state.luxehub.productData);
  //productData likely represents an array or object containing data related to products in the application. It could be an array of products, each with properties like _id, title, price, etc.
  const userInfo = useSelector((state) => state.luxehub.userInfo);
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-36" src={logoHub} alt="logoDark" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <li className="text-base text-black font-bold hover:text-pink-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>

            <li className="text-base text-black font-bold hover:text-pink-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-pink-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-pink-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-pink-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={bag} alt="cartImg" />
              {/*By adding the conditional check productData &&, you ensure that productData.length is only accessed if productData is not undefined. This prevents the error from occurring when productData is not yet initialized or fetched from the Redux store.*/}
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData && productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
