import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../../feature/slices/slice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log("slideIndex", slideIndex);
  return (
    <>
      <div className="relative pb-4 ">
        <div>
          {sliderData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  parseInt(item.id) === slideIndex
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-0 duration-700 ease-in-out scale-95"
                }
              >
                <div>
                  {parseInt(item.id) === slideIndex && (
                    <img src={item.img} className="h-[800px] w-full" />
                  )}
                </div>
                <div className="absolute top-44 mx-auto inset-x-1/4">
                  <p className="text-white text-4xl tracking-normal leading-none font-Inter font-bold">
                    {" "}
                    {parseInt(item.id) === slideIndex && item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex absolute bottom-10 left-[45%]">
          {sliderData.map((dot, index) => {
            return (
              <div className="mr-4" key={index}>
                <div
                  className={
                    index === slideIndex
                      ? "bg-green-300 rounded-full p-3 cursor-pointer"
                      : "bg-white rounded-full p-3 cursor-pointer"
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="absolute top-[60%] right-4 bg-white rounded-full p-1 hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[60%] left-4 bg-white rounded-full p-1 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default Slider;
