import MobileProductCardSlider from "./mobile/MobileProductCardSlider.jsx";
import DesktopGrid from "./desktop/DesktopGrid.jsx";

const ProductsSection = ({ title, items }) => {
    const isMobile = window.innerWidth < 768;

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-700">{title}</h2>
            {isMobile ? (
                <MobileProductCardSlider items={items} />
            ) : (
                <DesktopGrid items={items} />
            )}
        </div>
    );
};

export default ProductsSection