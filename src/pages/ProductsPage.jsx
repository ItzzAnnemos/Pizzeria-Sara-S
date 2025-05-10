import ProductsSection from "../components/ProductsSection.jsx";
import useMenuData from "../hooks/useMenuData.jsx";

function PizzeriaMenu() {
    const {data, loading, error} = useMenuData();

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
    );

    if (error) return <div className="text-red-600 text-center">Error loading menu items: {error}</div>;

    return (
        <div className="bg-amber-50 min-h-screen p-4 md:p-8 w-full overflow-x-hidden">
            <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">Пицерија Сара С</h1>
                <p className="text-gray-600 italic">Врвен квалитет</p>
            </header>

            <div className="max-w-full mx-auto">
                <div className="lg:container mx-auto">
                    {data && (
                        <>
                            {data.food && data.food.length > 0 && (
                                <ProductsSection title="Храна" items={data.food}/>
                            )}

                            {data.drinks && data.drinks.length > 0 && (
                                <ProductsSection title="Пијалоци" items={data.drinks}/>
                            )}
                        </>
                    )}
                </div>
            </div>

            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>© 2024 Пицерија Сара С.</p>
            </footer>
        </div>
    );
}

export default PizzeriaMenu