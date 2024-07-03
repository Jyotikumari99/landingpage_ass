"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MoveRight } from "lucide-react";

const Products = () => {
    const [meals, setMeals] = useState([]);
    const [category, setCategory] = useState("Chicken");

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
        <div className="container mx-auto my-12 bg-white">
            <h3 className="font-bold text-center mb-6"> Shop by Category</h3>
            <h2 className="text-3xl font-bold text-center mb-6">Top Category Of Organic Food</h2>
            <div className="flex flex-wrap justify-center mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`btn mx-2 my-2 py-2 px-8 rounded ${
                            cat === category ? "bg-primary text-white border rounded-3xl" : " rounded-3xl bg-secondary text-black"
                        }`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10 md:w-[80%] mx-auto">
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="flex items-center space-x-5 w-full ">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 rounded-full object-cover" />
                        <div className="h-full w-full flex flex-col justify-between ">
                            <div className=" flex justify-between items-center ">
                                <h3 className="font-bold text-lg">{meal.strMeal}</h3>
                                <span className="font-bold text-primary">$8.45</span>
                            </div>{" "}
                            <hr className="border-t border-dashed border-gray-600" />
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600 mb-2 text-sm font-medium">Lorem ipsum dolor sit amet</p>
                                <button className="text-primary text-sm  flex items-center gap-1">
                                    Shop Now <MoveRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
