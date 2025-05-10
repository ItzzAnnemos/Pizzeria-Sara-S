
const DesktopProductCard = ({product}) => {

    return (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-auto h-50 mx-auto object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <span className="text-lg font-semibold text-green-600">{product.price}ден.</span>
                </div>
                {/*<p className="text-gray-600 text-sm">{product.size}</p>*/}
                <p className="text-gray-600 text-sm">{product.ingredients}</p>
            </div>
        </div>
    )
}

export default DesktopProductCard