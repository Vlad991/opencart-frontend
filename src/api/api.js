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
    },
    getWishList() {
        return instance.get('index.php?route=account/wishlist');
    }
};

export const checkoutAPI = {
    getCart() {
        return instance.get('index.php?route=checkout/cart');
    },
};

export const commonAPI = {
    getCart() {
        return instance.get('index.php?route=common/cart');
    },
    getHeader() {
        return instance.get('index.php?route=common/header');
    },
    getFooter() {
        return instance.get('index.php?route=common/footer');
    },
    getHome() {
        return instance.get('index.php?route=common/home');
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
        return instance.get('index.php?route=common/search');
    },
    getMenu() {
        return instance.get('index.php?route=common/menu');
    },
};

export const informationAPI = {
    getInformation(id) {
        return instance.get('index.php?route=information/information&information_id=' + id);
    },
    getContact() {
        return instance.get('index.php?route=information/contact');
    }
};

export const productAPI = {
    getCategory(firstLevelId, secondLevelId) {
        return instance.get('index.php?route=product/category&path=' + firstLevelId + (secondLevelId ? "_" + secondLevelId : ''));
    },
    getProduct(productId) {
        return instance.get('index.php?route=product/product' + '&product_id=' + productId);
    },
    getSearch(search, categoryId, subCategory, description) {
        return instance.get('index.php?route=product/search' + (search ? '&search=' + search : '') + (categoryId ? '&category_id=' + categoryId : '') + (subCategory ? '&sub_category=' + subCategory : '') + (description ? '&description=' + description : ''));
    }
};

export const cartAPI = {
    info() {
        return instance.get('index.php?route=common/cart/info');
    },
    add(product_id, quantity) {
        let formData = new FormData();
        formData.append('product_id', product_id);
        formData.append('quantity', typeof(quantity) != 'undefined' ? quantity : 1);
        return instance.post('index.php?route=checkout/cart/add', formData);
    },
    remove(key) {
        let formData = new FormData();
        formData.append('key', key);
        return instance.post('index.php?route=checkout/cart/remove', formData);
    },
}