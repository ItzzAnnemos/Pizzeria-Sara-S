import {useEffect, useRef, useState} from "react";
import MobileProductCard from "./MobileProductCard.jsx";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileProductCardSlider = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const minSwipeDistance = 50;
    const sliderRef = useRef(null);
    const isSwiping = useRef(false);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        isSwiping.current = false; // reset at start
    };

    const handleTouchMove = (e) => {
        const moveX = e.touches[0].clientX;
        const diff = Math.abs(moveX - touchStartX.current);
        if (diff > minSwipeDistance) {
            isSwiping.current = true;
            touchEndX.current = moveX;
        }
    };

    const handleTouchEnd = (e) => {
        if (!isSwiping.current) return;

        const distance = touchStartX.current - touchEndX.current;

        // Ignore if on a button
        if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
            return;
        }

        if (distance > 0) {
            goToNext(); // Swiped left
        } else {
            goToPrevious(); // Swiped right
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
        <div className="relative w-full h-105 mb-8" ref={sliderRef}>
            <div className="relative w-full h-full">
                {products.map((product, index) => (
                    <MobileProductCard
                        key={product.id}
                        product={product}
                        currentIndex={currentIndex}
                        index={index}
                    />
                ))}
            </div>

            <div className="absolute left-2 top-3/9 -translate-y-1/2 z-10">
                <button
                    onClick={goToPrevious}
                    className="bg-white dark:bg-gray-700 border opacity-80 rounded-md py-6 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeft size={28} className="text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            <div className="absolute right-2 top-3/9 -translate-y-1/2 z-10">
                <button
                    onClick={goToNext}
                    className="bg-white dark:bg-gray-700 border opacity-80 rounded-md py-6 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Next"
                >
                    <ChevronRight size={28} className="text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-1 space-x-2 z-10">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? 'bg-red-600 dark:bg-red-400 scale-125'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to product ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileProductCardSlider