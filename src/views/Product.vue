<template>
    <div class="slider-ban slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 67px;margin-left: 36px;">
                            <h1 style="font-size: 90px">Our Products</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 7rem;padding-bottom: 4rem">
        <div class="text-slide text-center">
            <p style="color: #f04506">Most Popular</p>
            <h2>Our Exclusive Cakes</h2>
            <div class="row">
                <div
                    class="col-lg-4 col-md-6"
                    v-for="product in Prod"
                    :key="product.id"
                    style="padding-bottom: 38px;"
                >
                    <div class="pro-slide">
                        <img :src="require('../assets/images/' + product.images)" alt />
                        <div class="pro-text">
                            <h4>
                                <router-link
                                    :to="{ name: 'product-detail', params: { id: product.id } }"
                                >{{ product.name }}</router-link>
                            </h4>
                            <p>{{ product.description }}</p>
                            <a
                                v-on:click="addCat(product.id)"
                                class="btn-header"
                            >{{ product.price }} | Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useProduct from "../uses/fetchProduct"

export default {
    setup() {
        const { Prod, fetchAll, addCat } = useProduct();
        fetchAll();
        
        return { Prod, addCat };

    },

}
</script>