import {useEffect, useRef, useState} from "react";
import MobileProductCard from "./MobileProductCard.jsx";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileProductCardSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const minSwipeDistance = 50;
    const sliderRef = useRef(null);

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

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const distance = touchStartX.current - touchEndX.current;

        if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
            return;
        }

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                // Swiped left, go to next
                goToNext();
            } else {
                // Swiped right, go to previous
                goToPrevious();
            }
        }
    };

    useEffect(() => {
        const sliderElement = sliderRef.current;
        if (sliderElement) {
            sliderElement.addEventListener('touchstart', handleTouchStart, { passive: true });
            sliderElement.addEventListener('touchmove', handleTouchMove, { passive: true });
            sliderElement.addEventListener('touchend', handleTouchEnd, { passive: true });

            return () => {
                sliderElement.removeEventListener('touchstart', handleTouchStart);
                sliderElement.removeEventListener('touchmove', handleTouchMove);
                sliderElement.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, []);

    return (
        <div className="relative w-full h-125 mb-8" ref={sliderRef}>
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

            <div className="absolute left-2 top-3/8 -translate-y-1/2 z-10">
                <button
                    onClick={goToPrevious}
                    className="bg-white dark:bg-gray-700 border opacity-80 rounded-md py-6 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeft size={28} className="text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            <div className="absolute right-2 top-3/8 -translate-y-1/2 z-10">
                <button
                    onClick={goToNext}
                    className="bg-white dark:bg-gray-700 border opacity-80 rounded-md py-6 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Next"
                >
                    <ChevronRight size={28} className="text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-red-600 dark:bg-red-400' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileProductCardSlider