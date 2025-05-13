const MobileProductCard = ({product, currentIndex, index}) => {
    const isActive = currentIndex === index;

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                isActive ? 'opacity-100 translate-x-0 scale-100' :
                    index < currentIndex ? 'opacity-0 -translate-x-full scale-95' : 'opacity-0 translate-x-full scale-95'
            }`}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between border border-gray-100 dark:border-gray-700">
                <div className="relative h-70 overflow-hidden">
                    <img src={product.image}
                         alt={product.name}
                         className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold dark:text-gray-200">{product.name}</h3>
                        <span className="text-lg font-semibold text-green-600">{product.price}ден.</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{product.ingredients}</p>
                </div>
            </div>
        </div>
    );
};

export default MobileProductCard