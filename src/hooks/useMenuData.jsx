import useProducts from "./useProducts.js";
import {useMemo} from "react";

const useMenuData = () => {
    const { products, loading, error } = useProducts();

    const data = useMemo(() => {
        if (!products || products.length === 0) return null;

        const result = {
            food: [],
            drinks: []
        };

        products.forEach(item => {
            const type = (item.type || "").toLowerCase().trim();

            if (type === "drinks" || type === "drink") {
                result.drinks.push(item);
            } else {
                result.food.push(item);
            }
        });

        return result;
    }, [products]);

    return { data, loading, error };
};

export default useMenuData;