import DesktopProductCard from "./DesktopProductCard.jsx";

const DesktopGrid = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {items.map((product) => (
                <DesktopProductCard
                    product={product}
                />
            ))}
        </div>
    );
};

export default DesktopGrid