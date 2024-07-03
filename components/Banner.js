import React from "react";
import Image from "next/image"; // Import next/image component
import image from "../public/images.png"; // Correct relative path to public/images.jpeg
import lemon from "../public/lemon.jpg"; // Correct relative path to public/lemon.jpg

const Banner = () => (
  <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
    <div className="w-full md:w-1/2 mt-16">
      <p className="text-xl mb-4">Discount up to 20%</p>
      <h1 className="text-4xl font-bold mb-4">
        Buy Fresh And Organic
        <div className="flex items-center">
          Grocery Food
          <div className="h-7 w-24 rounded-full bg-slate-400 ml-5 relative">
            <Image
              src={lemon}
              alt="Lemon"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </h1>
      <p className="text-sm mb-4 text-gray-400">
        Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
        purus nec nibh tortor ipsum. Placerat consequat lorem.
      </p>
      <div className="flex flex-col sm:flex-row items-center">
        <button className="btn bg-[#3A5B3B] text-white py-2 px-4 rounded-full mr-4 mb-4 sm:mb-0">
          Shop Now →
        </button>
        <div className="flex space-x-8">
          <div>
            <p className="text-lg font-bold">35k +</p>
            <p className="text-gray-600">Users</p>
          </div>
          <div>
            <p className="text-lg font-bold">18k +</p>
            <p className="text-gray-600">Products</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 ">
      <Image
        src={image}
        alt="Healthy food"
        // layout="responsive"
        width={1500}
        height={600}
        className="w-screen  "
      />
    </div>
  </div>
);

export default Banner;
