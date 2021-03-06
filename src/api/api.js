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
    },
    getReturn() {
        return instance.get('index.php?route=account/return');
    },
    getReturnInfo(id) {
        return instance.get('index.php?route=account/return/info&return_id=' + id);
    },
    getReturnAdd() {
        return instance.get('index.php?route=account/return/add');
    },
    addReturn(data) {
        let formData = new FormData();
        for (let name in data) {
            formData.append(name, data[name]);
        }
        return instance.post('index.php?route=account/return/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getReturnSuccess() {
        return instance.get('index.php?route=account/return/success');
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
    },
    doContact(data) {
        let formData = new FormData();
        for (let name in data) {
            formData.append(name, data[name]);
        }
        return instance.post('index.php?route=information/contact', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getSuccess() {
        return instance.get('index.php?route=information/contact/success');
    },
    getSitemap() {
        return instance.get('index.php?route=information/sitemap');
    }
};

export const productAPI = {
    getCategory(firstLevelId, secondLevelId, sort, order, limit) {
        return instance.get('index.php?route=product/category&path=' + firstLevelId + (secondLevelId ? "_" + secondLevelId : '') + (sort ? '&sort=' + sort : '') + (order ? '&order=' + order : '') + (limit ? '&limit=' + limit : ''));
    },
    getProduct(productId) {
        return instance.get('index.php?route=product/product' + '&product_id=' + productId);
    },
    getProductReview(productId) {
        return instance.get('index.php?route=product/product/review' + (productId ? '&product_id=' + productId : ''));
    },
    writeReview(productId, data) {
        let formData = new FormData();
        for (let name in data) {
            formData.append(name, data[name]);
        }
        return instance.post('index.php?route=product/product/write&product_id=' + productId, formData);
    },
    getSearch(search, categoryId, subCategory, description) {
        return instance.get('index.php?route=product/search' + (search ? '&search=' + search : '') + (categoryId ? '&category_id=' + categoryId : '') + (subCategory ? '&sub_category=' + subCategory : '') + (description ? '&description=' + description : ''));
    },
    getCompare() {
        return instance.get('index.php?route=product/compare');
    },
    getManufacturer() {
        return instance.get('index.php?route=product/manufacturer');
    },
    getManufacturerInfo(id) {
        return instance.get('index.php?route=product/manufacturer/info' + (id ? '&manufacturer_id=' + id : ''));
    }
};

export const cartAPI = {
    info() {
        return instance.get('index.php?route=common/cart/info');
    },
    add(product_id, quantity) {
        let formData = new FormData();
        formData.append('product_id', product_id);
        formData.append('quantity', typeof (quantity) != 'undefined' ? quantity : 1);
        return instance.post('index.php?route=checkout/cart/add', formData);
    },
    remove(key) {
        let formData = new FormData();
        formData.append('key', key);
        return instance.post('index.php?route=checkout/cart/remove', formData);
    },
};

export const wishlistAPI = {
    add(product_id) {
        let formData = new FormData();
        formData.append('product_id', product_id);
        return instance.post('index.php?route=account/wishlist/add', formData);
    },
}

export const compareAPI = {
    add(product_id) {
        let formData = new FormData();
        formData.append('product_id', product_id);
        return instance.post('index.php?route=product/compare/add', formData);
    },
}