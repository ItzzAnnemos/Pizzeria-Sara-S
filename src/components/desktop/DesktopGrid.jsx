import DesktopProductCard from "./DesktopProductCard.jsx";

const DesktopGrid = ({items}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {items.map((product) => (
                <DesktopProductCard
                    product={product}
                />
            ))}
        </div>
    );
};

export default DesktopGrid