import {useState} from "react";

const DesktopProductCard = ({id, product}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={id}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-70 overflow-hidden">
                <img src={product.image}
                     alt={product.name}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold dark:text-gray-200">{product.name}</h3>
                    <span className="text-lg font-semibold text-green-600">{product.price}ден.</span>
                </div>
                {/*<p className="text-gray-600 text-sm">{product.size}</p>*/}
                <p className="text-gray-600 dark:text-gray-400 text-sm">{product.ingredients}</p>
            </div>
        </div>
    )
}

export default DesktopProductCard