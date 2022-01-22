<template>
    <div class="slider-cart slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
                            <h1 style="font-size: 78px">Our Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 7rem; padding-bottom: 7rem">
        <div class="row">
            <div class="table-responsive">
<table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Images</th>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody v-if="items && user && names == user.name">
                    <tr v-for="(item) in items" :key="item.id">
                        <td>
                            <button
                                @click.prevent="removeFromCart(item.id)"
                                style="border-radius: 50%;padding: 7px;margin-top: 21px;padding-left: 12px;
                        text-align: center;padding-right: 14px;background: orange;color: white;"
                            >X</button>
                        </td>
                        <td class="td-images">
                            <img class="ing"
                                :src="require('../assets/images/' + item.images)"
                                style="width: 140px;"
                            />
                        </td>
                        <td style="padding-top: 41px;">{{ item.name }}</td>
                        <td style="padding-top: 41px;">{{ item.price }}</td>
                        <td>
                            <p
                                class="d-flex pt-1 quantity"
                                style="margin-right: -50px; margin-top: 14px;margin-left: 47px;"
                            >
                                <button
                                    type="submit"
                                    style=" width: 40px; margin-right: 25px; background:#f04506; border-color: #f04506; color: #ffff;font-size: 23px;border-radius: 50%;height:40px;"
                                    v-on:click="onCountMinus(item.id)"
                                >-</button>
                                <input
                                    type="text"
                                    v-bind:value="`${item.quantity}`"
                                    style="width: 40px; text-align: center;"
                                />

                                <button
                                    type="submit"
                                    style=" width: 40px;margin-left: 25px; background:#f04506; border-color: #f04506;color: #ffff;font-size: 23px;border-radius: 50%;height: 40px;"
                                    v-on:click="onCount(item.id)"
                                >+</button>
                            </p>
                        </td>
                        <td style="padding-top: 41px;">{{ item.quantity * item.price }}</td>
                    </tr>
                </tbody>
            </table>
             <div class="clear cart-page-total" style=" margin-left: 81%;">
                <a v-on:click="onClear">Clear</a>
            </div>
            </div>
            
           
        </div>
        <div class="row pt-5">
            <div class="col-md-6">
                <div class="cart-page-total" style="padding-bottom: 2rem">
                    <h3 style="color: rgb(216, 91, 8);">Cart totals</h3>
                    <ul v-if="items">
                        <li>
                            Subtotal
                            <span>${{ sum }}</span>
                        </li>
                        <li>
                            Total
                            <span>${{ sum }}</span>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>
                            Subtotal
                            <span>$0</span>
                        </li>
                        <li>
                            Total
                            <span>$0</span>
                        </li>
                    </ul>
                    <a v-on:click="onCheckOut">CheckOut</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from "../router";
import useProduct from "../uses/fetchProduct"
import { ref } from "vue"
import { useStore } from "vuex";
export default {
    setup() {
        const { items } = useProduct();
        const store = useStore();
        function onCount(proId) {
            store.dispatch('onCount',proId);
        }
        function onCountMinus(proId) {
            store.dispatch('onCountMinus',proId);
        }
        function removeFromCart(itemId) {
            if (confirm("Do you really want to delete?")) {
                console.log(items);
                items.splice(itemId, 1);
                console.log(itemId);
                const parsed = JSON.stringify(items);
                localStorage.setItem('cart', parsed);
                location.reload();
            }
        };
        function onClear() {
            if (confirm("Do you really want to delete?")) {
                localStorage.removeItem('cart');
                location.reload();
            }
        }
        let sum = 0
        if (items) {
            items.map(x => {
                sum = sum + (x.price * x.quantity)
            });
        }

        console.log(items);

        // function onCount(proId) {
        //     let cart = JSON.parse(localStorage.getItem("cart"));
        //     let indexs = cart.find(({ id }) => id === proId);
        //     if (indexs) {
        //         indexs["quantity"] += 1;
        //     }
        //     console.log(indexs);
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     location.reload();
        // }

        // function onCountMinus(proId) {
        //     let cart = JSON.parse(localStorage.getItem("cart"));
        //     let indexs = cart.find(({ id }) => id === proId);
        //     if (indexs) {
        //         indexs["quantity"] -= 1;
        //     }
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     location.reload();
        // }
        let user = JSON.parse(localStorage.getItem("user"));
        function onCheckOut() {
            if (items.length > 0) {
                router.push('/checkout')
            } else {
                alert('Không có sp nào trong giỏ hàng')
            }

        }
        let names = ref("");
        if (items != null && items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                names.value = items[i].name_user

            }
        }

        return { items, removeFromCart, sum, user, onCount, onCountMinus, onClear, onCheckOut, names }

    },
    
}
</script>