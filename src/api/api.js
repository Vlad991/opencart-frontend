import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8888/',
});

export const commonAPI = {
    getHeader() {
        return instance.get('index.php?route=common/header')
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
};