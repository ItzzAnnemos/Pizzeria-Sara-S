import {useEffect, useState} from "react";
import productRepository from "../repository/productRepository.js";

const initialState = {
    "products": [],
    "loading": true,
};

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

    return state;
};

export default useProducts;
