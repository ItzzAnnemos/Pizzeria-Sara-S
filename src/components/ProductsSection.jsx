import MobileProductCardSlider from "./mobile/MobileProductCardSlider.jsx";
import DesktopGrid from "./desktop/DesktopGrid.jsx";
import {useEffect, useState} from "react";

const ProductsSection = ({ title, products }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="">
            <div className="text-center mb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-red-700 dark:text-red-300 relative inline-block">
                    {title}
                </h2>
            </div>

            <div className="rounded-xl md:shadow-lg md:p-6">
                {isMobile ? (
                    <MobileProductCardSlider products={products} />
                ) : (
                    <DesktopGrid products={products} />
                )}
            </div>
        </div>
    );
};

export default ProductsSection