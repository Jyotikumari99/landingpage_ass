import React from "react";
import Image from "next/image"; // Import next/image component
import image from "../public/images.jpeg"; // Correct relative path to public/images.jpeg
import lemon from "../public/lemon.jpg"; // Correct relative path to public/lemon.jpg

const Banner = () => (
  <div className="flex items-center justify-between p-8 bg-gray-100">
    <div className="w-1/2 mt-16">
      <p className="text-xl mb-4">Discount up to 20%</p>
      <h1 className="text-4xl font-bold mb-4">
        Buy Fresh And Organic
        <div className="flex items-center">
          Grocery Food
          <div className="h-9 w-20 rounded-full bg-slate-400 ml-5 relative">
            <Image
              src={lemon}
              alt="Lemon"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </h1>
      <p className="text-xl mb-4">Discount up to 20%</p>
      <div className="flex items-center">
        <button className="btn bg-green-700 text-white py-2 px-4 rounded-full mr-4">
          Shop Now →
        </button>
        <div>
          <p className="text-lg">35k + Users</p>
          <p className="text-lg">18k + Products</p>
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <Image
        src={image}
        alt="Healthy food"
        layout="responsive"
        width={800}
        height={600}
      />
    </div>
  </div>
);

export default Banner;
