"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState("Seafood");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        if (response.data.meals) {
          setMeals(response.data.meals);
        } else {
          setMeals([]);
        }
      })
      .catch((error) => {
        console.error(error);
        setMeals([]);
      });
  }, [category]);

  const categories = ["Seafood", "Beef", "Chicken", "Vegetarian", "Dessert"];

  return (
    <div className="container mx-auto mt-12">
      <h3 className="font-bold text-center mb-6"> Shop by Category</h3>
      <h2 className="text-3xl font-bold text-center mb-6">
        Top Category Of Organic Food
      </h2>
      <div className="flex justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn mx-2 py-2 px-4 rounded ${
              cat === category
                ? "bg-green-700 text-white border rounded-3xl"
                : "border rounded-3xl border-gray-400 bg-slate-100"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="card p-4 rounded-lg"
            style={{ boxShadow: "none", border: "none" }}
          >
            <div className="flex items-center space-x-4">
              <img
                src={meal.strMealThumb}
                className="w-16 h-16 rounded-full object-cover bg-[#F9F5F0]"
                alt={meal.strMeal}
              />
              <div>
                <h5 className="text-xl font-bold">{meal.strMeal}</h5>
                <p className="text-gray-600">$8.45</p>
              </div>
            </div>
            <div className="card-body mt-4">
              <hr className="border-t border-dotted border-gray-400" />
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600">Lorem ipsum dolor sit</p>
                <a
                  href="#"
                  className="text-green-700 py-2 px-4 rounded inline-block"
                >
                  Shop Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
