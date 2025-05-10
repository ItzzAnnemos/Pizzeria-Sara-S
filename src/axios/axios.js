import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://sheetdb.io/api/v1/k8dye6uisth5u",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
