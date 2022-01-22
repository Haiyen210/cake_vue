import { ref } from "vue"
import { createToast } from 'mosha-vue-toastify';
export default function() {
    const Prod = ref([]);
    const error = ref(null);
    const fetchAll = async() => {
        try {
            const response = await fetch("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/Prod");
            if (!response.ok) throw new Error("Error, Please check again!!");
            Prod.value = await response.json();
        } catch (err) {
            error.value = err;
        }
    };

    function addCat(itemId) {
        let user = JSON.parse(localStorage.getItem("user"));
        let item = this.Prod.find(({ id }) => id === itemId);
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        let itemIS = cartItems.find(({ id }) => id === itemId);
        if (cartItems == null) {
            cartItems = [];
        }
        if (item && !itemIS) {
            if (item['quantity'] == null) {
                item['quantity'] = 1;
                item['name_user'] = user['name'];
                cartItems.push(item);
            }
        }
        if (itemIS) {
            if (itemIS['quantity']) {
                itemIS['quantity'] += 1;
                localStorage.setItem("cart", JSON.stringify(itemIS));
            }
        }

        if (cartItems != null) {

            localStorage.setItem("cart", JSON.stringify(cartItems));
            createToast({
                title: 'Thành công',
                description: 'Thêm sản phẩm vào giỏ hàng thành công',
                type: 'success',
                timeout: 1000

            })
        }
    }

    const items = JSON.parse(localStorage.getItem("cart"));
    return { Prod, fetchAll, addCat, items }
}