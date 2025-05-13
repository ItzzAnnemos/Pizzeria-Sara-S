import DesktopProductCard from "./DesktopProductCard.jsx";

const DesktopGrid = ({products}) => {
    return (
        <div>
            <p className="text-sm text-center pb-5 text-gray-500 dark:text-gray-400">
                Прикажани <span className="font-medium">{products.length}</span> продукти
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">

                {products.map((product) => (
                    <DesktopProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopGrid