export default function Categories() {
    const categories = ["FRUITS AND VEGETABLES", "BAKERY", "MEAT AND SEAFOOD", "BEVERAGE", "BISCUIT AND SNACKS"];

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Category Of Organic Food</h2>
            <div className="flex justify-center space-x-4">
                {categories.map((category, index) => (
                    <button key={index} className={`px-4 py-2 rounded-full ${index === 2 ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
