import DesktopProductCard from "./DesktopProductCard.jsx";

const DesktopGrid = ({products}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {products.map((product) => (
                <DesktopProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default DesktopGrid