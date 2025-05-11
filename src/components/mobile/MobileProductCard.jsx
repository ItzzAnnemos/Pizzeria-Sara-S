const MobileProductCard = ({product, currentIndex, index}) => {
    const isActive = currentIndex === index;

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${
                isActive ? 'opacity-100 translate-x-0' :
                    index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
            }`}
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-auto mx-auto object-cover"/>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold dark:text-gray-200">{product.name}</h3>
                        <span className="text-lg font-semibold text-green-600">{product.price}ден.</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{product.ingredients}</p>
                </div>
            </div>
        </div>
    );
};

export default MobileProductCard