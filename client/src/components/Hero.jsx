import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className=" px-5 xl:px-10 md:w-1/2 mb-10 ">
      <h1 className=" mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#edeef1] leading-normal xl:leading-relaxed ">
        Search Recipe What You Like
      </h1>

      <form 
      className=" bg-white p-4 rounded-full relative flex items-center"
      action="/search">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300" />
        <input
        className=" outline-none w-full placeholder:text-[#1b2629]"
          type="search"
          name="query"
          placeholder="Search for a recipe"
          id="search"
          required
        />
      </form>
    </div>
  );
};

export default Hero;
