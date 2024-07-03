
export default function Hero() {
    return (
        <div className="flex min-h-[90vh] bg-secondary-foreground">
            <div className="w-full md:w-3/5 flex items-center">
                <div className="w-[70%] mx-auto">
                    <p className="text-primary mb-2">Discount up to 20%</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Buy Fresh And Organic Grocery Food</h1>
                    <p className="mb-6 text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet, consectetur. Condimentum sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.
                    </p>
                    <div className="w-full flex justify-between">
                        <button className="bg-primary text-white px-6 py-2 h-1/2 rounded-full ">SHOP NOW</button>
                        <div className="hidden md:flex ">
                            <div className="border-e border-dashed border-black px-10">
                                <p className="text-3xl font-bold">35k+</p>
                                <p className="text-gray-600">Users</p>
                            </div>
                            <div className="px-10">
                                <p className="text-3xl font-bold">18k+</p>
                                <p className="text-gray-600">Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-2/5 bg-primary relative">
                <img
                    src="/foodplate.png"
                    alt="Fresh Salad"
                    className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-4/5"
                />
            </div>
        </div>
    );
}
