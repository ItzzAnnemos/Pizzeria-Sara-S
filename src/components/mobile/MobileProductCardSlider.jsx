import {useState} from "react";
import MobileProductCard from "./MobileProductCard.jsx";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileProductCardSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-85 mb-8">
            <div className="relative w-full h-full">
                {items.map((product, index) => (
                    <MobileProductCard
                        key={product.id}
                        product={product}
                        currentIndex={currentIndex}
                        index={index}
                    />
                ))}
            </div>

            <div className="absolute top-2/7 left-2 -translate-y-1/2 z-10">
                <button
                    onClick={goToPrevious}
                    className="bg-white rounded-full p-2 shadow-md"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="absolute top-2/7 right-2 -translate-y-1/2 z-10">
                <button
                    onClick={goToNext}
                    className="bg-white rounded-full p-2 shadow-md"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-red-600' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileProductCardSlider