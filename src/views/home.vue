<template>
    <main>
        <div class="slider-banner slider-area">
            <div class="slick-tract" style="opacity: 1; width: 1519px; min-height: 820px;">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-xl-6 col-lg-7 col-md-8">
                            <div class="hero-caption" style="margin-top: 300px;">
                                <h1 style="font-size: 74px">Delicious Cake For Everyone</h1>
                                <p>
                                    Land behold it created good saw after she'd Our set
                                    living. Signs midst dominion creepeth morning
                                </p>
                                <a href class="btn-header">Explore Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="padding-top: 7rem">
            <div class="text-slide text-center">
                <p style="color: #f04506">Most Popular</p>
                <h2>Our Exclusive Cakes</h2>
            </div>

            <Carousel :items-to-show="4"  v-if="Prod">
                <Slide v-for="product in Prod" :key="product.id">
                    <div class="pro-slide">
                          <img v-bind:src="require('../assets/images/' + product.images)" />
                        <div class="pro-text">
                            <h4><router-link :to="{name: 'product-detail', params: {id: product.id}}">{{ product.name }}</router-link></h4>
                            <p>{{ product.description }}</p>
                             <a  v-on:click="addCat(product.id)" class="btn-header">{{ product.price }} | Order Now</a>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="support-company-area" style="padding-top: 7rem">
            <div class="container">
                <div class="row" v-for="cake in slidesCake" :key="cake.id">
                    <div class="col-6">
                        <img :src="require('../assets/images/' +cake.image)" alt />
                    </div>
                    <div class="col-5" style="padding-top: 7rem; ">
                        <div class="cake-text pl-5">
                            <span>{{ cake.title }}</span>
                            <h2>{{ cake.name }}</h2>
                            <p>{{ cake.description }}</p>
                            <a href class="btn-header">{{ cake.buy }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slide-cakes-proity">
            <img src="../assets/images/cake1.png" alt />
        </div>
        <div class="slides-priority">
            <div class="priority"  style="padding-top: 7rem; ">
               <div class="divs" style="padding-bottom: 7rem">
                    <div class="container">
                    <div class="text-slide text-center" style="padding-top: 6rem">
                        <p style="color: #f04506">Our Features</p>
                        <h2>Quality is Our First Priority</h2>
                    </div>
                    <div class="row">
                        <div class="col-4 text-center" v-for="broad in Boarding" :key="broad.id">
                            <div
                                class="slide-text-broad p-5"
                                :style="styleobj"
                            >
                                <div class="broad-img">
                                    <img :src="require('../assets/images/' +broad.image)" alt />
                                </div>
                                <div class="broad-text pt-4">
                                    <h5>{{ broad.title }}</h5>
                                    <p>{{ broad.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
        <div class="video-areas">
            <img src="../assets/images/video-bg.webp" alt=" " />
            <div class="container">
                <div class="video-icon">
                    <a
                        href="https://www.youtube.com/watch?v=nTtpHxnO9zA"
                        class="popup-video btn-icon"
                    >
                        <i class="bi bi-play-fill"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="slides-comm" style="padding-top: 7rem; padding-bottom: 7rem">
            <div class="container">
                <div class="text-slide text-center">
                    <p style="color: #f04506">Testimonial</p>
                    <h2>What Customers Say</h2>
                </div>

                <Carousel :items-to-show="3" >
                    <Slide v-for="des in desginer" :key="des.id">
                        <div class="slide-des" style="width:85%;">
                            <div class="client-caption">
                                <p>{{ des.description }}</p>
                            </div>
                            <div class="testimonial-founder d-flex">
                                <div class="founder-ing">
                                    <img :src="require('../assets/images/' +des.image)" alt />
                                </div>
                                <div class="founder-text" style="margin-left: 40px;">
                                    <h3 style="color:#f04506">{{ des.name }}</h3>
                                    <p>{{ des.title }}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>


    </main>

</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import {ref} from "vue"
import useProduct from "../uses/fetchProduct"
export default ({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,

    },
    setup(){
        const {addCat } = useProduct();
        const Prod = ref([]);
        const Boarding = ref([]);
        const slidesCake = ref([]);
        const desginer = ref([]);
        const error =  ref(null);

        const fetchAll = async () => {
            try {
                const response = await fetch("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/Prod");
                const responses = await fetch("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/Boarding");
                const res = await fetch("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/slidesCake");
                const resp = await fetch("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/desginer");
                if(!response.ok) throw new Error("Error, Please check again!!");
                Prod.value = await response.json();
                Boarding.value = await responses.json();
                slidesCake.value = await res.json();
                desginer.value = await resp.json();
            } catch (err) {
                error.value = err;
            }
        }
        fetchAll()
        return{Prod,Boarding,slidesCake,desginer,addCat}
    },



})
</script>