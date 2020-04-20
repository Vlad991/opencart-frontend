import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8888/OpenCartBackend',
});

export const commonAPI = {
    getHeader() {
        return instance.get('index.php?route=common/header')
            .then(response => {
                return response.data;
            });
    },
    getFooter() {
        return instance.get('index.php?route=common/footer')
            .then(response => {
                return response.data;
            });
    },
    getHome() {
        return instance.get('index.php?route=common/home')
            .then(response => {
                return response.data;
            });
    },
    getCurrency() {
        return instance.get('index.php?route=common/currency')
            .then(response => {
                return response.data;
            });
    },
    setCurrency(action = 'index.php?route=common/currency/currency', code) {
        let data = new FormData();
        data.append('code', code);
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        return instance.post(action, data, config)
            .then(response => {
                return response.data;
            });
    },
    getSearch() {
        return instance.get('index.php?route=common/search')
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
};

export const informationAPI = {
    getInformation(id) {
        return instance.get('index.php?route=information/information&information_id=' + id)
            .then(response => {
                return response.data;
            });
    },
    getContact() {
        return instance.get('index.php?route=information/contact')
            .then(response => {
                return response.data;
            });
    }
};