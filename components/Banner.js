import React from "react";
import image from "../public/images.jpeg";
const Banner = () => (
  <div className="flex items-center justify-between p-8 bg-gray-100">
    <div className="w-1/2 mt-16">
      <p className="text-xl mb-4">Discount up to 20%</p>
      <h1 className="text-4xl font-bold mb-4">
        Buy Fresh And Organic Grocery Food
      </h1>
      <p className="text-xl mb-4">Discount up to 20%</p>
      <button className="btn bg-green-500 text-white py-2 px-4 rounded">
        Shop Now
      </button>
      <div className="mt-4">
        <p className="text-lg">35k + Users</p>
        <p className="text-lg">18k + Products</p>
      </div>
    </div>
    <div className="w-1/2">
      <img src={image} alt="Healthy food" className="w-full " />
    </div>
  </div>
);

export default Banner;
