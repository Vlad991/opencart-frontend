import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8888/OpenCartBackend',
    headers: {}
});

export const accountAPI = {
    getRegister() {
        return instance.get('index.php?route=account/register');
    },
    doRegister(data) {
        let formData = new FormData();
        for (let name in data) {
            formData.append(name, data[name]);
        }
        return instance.post('index.php?route=account/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getSuccess() {
        return instance.get('index.php?route=account/success');
    },
    getLogin() {
        return instance.get('index.php?route=account/login');
    },
    doLogin(data) {
        let formData = new FormData();
        for (let name in data) {
            formData.append(name, data[name]);
        }
        return instance.post('index.php?route=account/login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getAccount() {
        return instance.get('index.php?route=account/account');
    },
    getLogout() {
        return instance.get('index.php?route=account/logout');
    }
};

export const commonAPI = {
    getCart() {
        return instance.get('index.php?route=common/cart')
            .then(response => {
                return response.data;
            });
    },
    getHeader() {
        return instance.get('index.php?route=common/header');
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
        return instance.get('index.php?route=common/currency');
    },
    setCurrency(code) {
        let data = new FormData();
        data.append('code', code);
        return instance.post('index.php?route=common/currency/currency', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getSearch() {
        return instance.get('index.php?route=common/search')
            .then(response => {
                return response.data;
            });
    },
    getMenu() {
        return instance.get('index.php?route=common/menu')
            .then(response => {
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

export const productAPI = {
    getCategory(firstLevelId, secondLevelId) {
        return instance.get('index.php?route=product/category&path=' + firstLevelId + (secondLevelId ? "_" + secondLevelId : ''))
            .then(response => {
                return response.data;
            });
    },
    getProduct(firstLevelId, secondLevelId, productId) {
        return instance.get('index.php?route=product/product&path=' + firstLevelId + (secondLevelId ? "_" + secondLevelId : '') + '&product_id=' + productId)
            .then(response => {
                return response.data;
            });
    }
};