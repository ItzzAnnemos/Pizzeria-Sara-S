import {useEffect, useState} from "react";
import productRepository from "../repository/productRepository.js";

const initialState = {
    "products": [],
    "loading": true,
};

const mockProducts = [
    {
        id: 1,
        type: "food",
        name: "Pizza Capricciosa",
        ingredients: ["Tomato Sauce", " Mozzarella", "Ham", "Mushrooms", "Olives"],
        price: 9.99,
        image: "https://www.concept.mk/2022/02/25/pica-klasik-kapricioza.png"
    },
    {
        id: 2,
        type: "food",
        name: "Pepperoni Pizza",
        ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
        price: 8.99,
        image: "https://www.concept.mk/2023/08/21/%D0%9F%D0%B8%D1%86%D0%B0_%D0%98%D0%BD%D1%84%D0%B5%D1%80%D0%BD%D0%BE___3_.png"
    },
    {
        id: 3,
        type: "food",
        name: "Bacon Lovers Pizza",
        ingredients: ["Tomato Sauce", "Mozzarella", "Bacon", "Cheddar"],
        price: 10.49,
        image: "https://www.concept.mk/2022/02/25/pileska-pastramalija1.png"
    },
    {
        id: 4,
        type: "food",
        name: "Pizza Capricciosa",
        ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives"],
        price: 9.99,
        image: "https://www.concept.mk/2022/03/10/0-pileska_pastramajl_so_kaskaval.png"
    },
    {
        id: 5,
        type: "food",
        name: "Pepperoni Pizza",
        ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
        price: 8.99,
        image: "https://www.concept.mk/2022/03/10/0-svinska_pastramajl_so_kaskaval.png"
    },
    {
        id: 6,
        type: "food",
        name: "Bacon Lovers Pizza",
        ingredients: ["Tomato Sauce", "Mozzarella", "Bacon", "Cheddar"],
        price: 10.49,
        image: "https://img.freepik.com/premium-photo/fresh-tasty-capricciosa-pizza-with-mozzarella-cheese-tomatoes-ham-champignons-isolated-white-background_136401-4315.jpg"
    },
];

const useProducts = () => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        productRepository
            .findAll()
            .then((response) => {
                setState({
                    "products": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     // Simulate API delay
    //     const timer = setTimeout(() => {
    //         setState({
    //             products: mockProducts,
    //             loading: false,
    //         });
    //     }, 500); // 0.5 second delay to mimic loading
    //
    //     return () => clearTimeout(timer);
    // }, []);

    return state;
};

export default useProducts;
