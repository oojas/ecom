import React from "react";
import { useState } from "react";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const bannerComp = () => {
  // utilizes the useState hook from React. It initializes a piece of state called currentSlide with an
  //initial value of 0. The useState hook returns an array where the first element (currentSlide)
  // represents the current state value, and the second element (setCurrentSlide) is a function used to
  //update the state value.
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/t.resize(w:2000)/manish-banner/1703575785HOME_PAGE_-_1531x731.webp",
    "https://cdn.skims.com/images/hfqi0zm0/production/3c645bfd0563b1d46d57c9497c32dfdca8d73ad1-3000x1298.png?w=1944&q=95&auto=format",
    "https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/t.resize(w:2000)/manish-banner/17043709701703248826HOME_PAGE_-_1349x651_womenswear_(1).webp",
    "https://taruntahiliani.com/cdn/shop/files/SS_24-Chikan_abaea833-26bb-4670-b27b-65883a511f1e_1800x.jpg?v=1708079711",
    "  https://kyliecosmetics.com/cdn/shop/files/lip_butter_HP-banner_1728x969_REV_1B_c0e5bf97-ae3f-4190-9d5b-3a458d59366d.jpg?crop=center&height=1077&v=1709715454&width=1920",
  ];
  // a callback function that will be called to handle the action of moving to the previous slide.
  //When invoked, it updates the currentSlide state based on its previous value.
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  //If the currentSlide is 0, meaning the user is currently viewing the first slide, it sets the currentSlide to 4. This is because it seems like there are 5 slides (0-indexed), so going to the "previous" slide from the first one should display the last slide. The value 4 is the index of the last slide.
  //If the currentSlide is not 0, it decrements the currentSlide value by 1.
  return (
    <>
      <div className="w-full h-auto overflow-x-hidden">
        <div className="h-[650px] w-screen relative">
          <div
            //This inline style is applied to an element, presumably a container holding the slides of a slider or carousel component.
            //It uses the CSS transform property to achieve a horizontal translation effect, shifting the container to show the current slide.
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            className="w-[600vw] h-full flex transition-transform duration-1000"
          >
            <img
              className="w-screen h-full object-cover"
              src={data[0]}
              alt="ImageOne"
              loading="priority"
            />
            <img
              className="w-screen h-full object-cover"
              src={data[1]}
              alt="ImageOne"
            />
            <img
              className="w-screen h-full object-cover"
              src={data[2]}
              alt="ImageOne"
            />
            <img
              className="w-screen h-full object-cover"
              src={data[3]}
              alt="ImageOne"
            />
            <img
              className="w-screen h-full object-cover"
              src={data[4]}
              alt="ImageOne"
            />
          </div>
          {/* div for icons*/}
          <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
            <div
              onClick={prevSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
            >
              <HiArrowLeft />
            </div>
            <div
              onClick={nextSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
            >
              <HiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default bannerComp;
