<template>
    <div class="slider-cart slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
                            <h1 style="font-size: 78px">CheckOut</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 7rem; padding-bottom: 7rem">
        <div class="row">
            <div class="col-lg-12">
                <form method="post" @submit.prevent="onOders">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading_s1">
                                <h4>Payment details</h4>
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    placeholder="Name *"
                                    v-model="orders.name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="email"
                                    placeholder="Email*"
                                   v-model="orders.email"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone *"
                                    v-model="orders.phone"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="address"
                                    placeholder="Address *"
                                    v-model="orders.address"
                                />
                            </div>
                            <div class="heading_s1">
                                <h4>More information</h4>
                            </div>
                            <div class="form-group mb-0">
                                <textarea
                                    rows="5"
                                    class="form-control"
                                    placeholder="More information"
                                    name="order_note"
                                    v-model="orders.content"
                                ></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="order_review">
                                <div class="heading_s1">
                                    <h4>Your order list</h4>
                                </div>
                                <div class="table-responsive order_table">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="item in items " :key="item.id">
                                                <td>
                                                    {{ item.name }}
                                                    <span class="product-qty">x {{ item.quantity }}</span>
                                                </td>
                                                <td>${{ item.quantity * item.price }}</td>
                                            </tr>
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Total payment</th>
                                                <td class="product-subtotal">${{sum}}</td>
                                            </tr>
                                            <tr>
                                                <th>Transport fee</th>
                                                <td>Free shipping</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td class="product-subtotal">${{sum}}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="payment_method">
                                    <div class="heading_s1">
                                        <h4>Payment methods</h4>
                                    </div>
                                    <div class="payment_option">
                                        <div class="custome-radio">
                                            <input
                                                class="form-check-input"
                                                required
                                                type="radio"
                                                name="payment_option"
                                                id="exampleRadios3"
                                                value="option3"
                                                checked
                                            />
                                            <label
                                                class="form-check-label"
                                                for="exampleRadios3"
                                            >Payment on delivery</label>
                                        </div>
                                        <div class="custome-radio">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="payment_option"
                                                id="exampleRadios4"
                                                value="option4"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="exampleRadios4"
                                            >Direct transfer</label>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-fill-out btn-block">Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import useProduct from "../uses/fetchProduct"
import { ref } from "vue"
import router from "../router";
export default {
    setup() {
        const { items } = useProduct();
        let user = JSON.parse(localStorage.getItem("user"));
        const orders = ref({
            name: user.name,
            email: user.email,
            phone: "",
            address: "",
            content:"",
            order: items
        })
        let sum = 0
        if (items) {
            items.map(x => {
                sum = sum + (x.price * x.quantity)
            });
        }
        function onOders(){
           localStorage.setItem('order', JSON.stringify(orders.value));
           localStorage.removeItem('cart')
           router.push('/checkout_success')
        }
        return { items, sum,user,orders,onOders }
    }
}
</script>