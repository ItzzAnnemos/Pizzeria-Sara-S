import ProductsSection from "../components/ProductsSection.jsx";
import useMenuData from "../hooks/useMenuData.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import {Pizza} from 'lucide-react';

function ProductsPage() {
    const {data, loading, error} = useMenuData();

    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-amber-50 dark:bg-gray-900">
            <div className="relative">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 dark:border-red-300"></div>
                <Pizza
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 dark:text-red-400"
                    size={24}/>
            </div>
        </div>
    );

    if (error) return (
        <div className="flex flex-col items-center justify-center h-screen bg-amber-50 dark:bg-gray-900">
            <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg shadow-lg max-w-md">
                <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Грешка</h2>
                <p className="text-red-600 dark:text-red-300">Не може да се вчита менито: {error}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-amber-50 dark:bg-gray-900 min-h-screen flex flex-col p-4 md:p-8 w-full overflow-x-hidden">
            <header className="mb-8 text-center">
                <div className="absolute right-1 top-3  md:right-4 md:top-4">
                    <ThemeToggle/>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-light text-red-700 dark:text-red-300 mb-2">Пицерија
                    Сара С</h1>
                <p className="text-gray-600 dark:text-gray-300 italic">Врвен квалитет</p>
            </header>

            <div className="w-full mx-auto flex-1">
                <div className="lg:container mx-auto">
                    {data && (
                        <>
                            {data.food && data.food.length > 0 && (
                                <ProductsSection title="Храна" products={data.food}/>
                            )}

                            {data.drinks && data.drinks.length > 0 && (
                                <ProductsSection title="Пијалоци" products={data.drinks}/>
                            )}
                        </>
                    )}
                </div>
            </div>

            <footer className="mt-12 text-center text-gray-500 dark:text-gray-300 text-sm align-end">
                <p>© 2024 Пицерија Сара С. - Сите права се задржани.</p>
            </footer>
        </div>
    );
}

export default ProductsPage