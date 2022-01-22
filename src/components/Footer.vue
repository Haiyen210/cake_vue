<template>
            <div class="Slide-photo">
            <Carousel :items-to-show="4">
                <Slide v-for="img in photo" :key="img.id" style="width:25%">
                    <div class="photo-img">
                        <img :src="img.images" alt style=" height:340px" />
                        <a href>
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </Slide>
                <template #addons>
                    <!-- <Navigation /> -->
                </template>
            </Carousel>
        </div>
            <footer>
        <div class="footer-wrapper" style="background:#fff5f2;">
            <div class="footer-area footer-padding">
                <div class="container" style="padding-top: 5rem;">
                    <div class="row justify-content-between">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div class="single-footer-caption mb-50">
                                <div class="single-footer-caption mb-30">
                                    <div class="footer-logo mb-35">
                                        <a href="index.html">
                                            <img
                                                src="../assets/images/logo1.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div class="footer-tittle">
                                        <div class="footer-pera">
                                            <p style=" margin-top: 2rem">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                                        </div>

                                        <div class="footer-social">
                                            <a href="#">
                                                <i class="bi bi-twitter"></i>
                                            </a>
                                            <a href="https://bit.ly/sai4ull">
                                                <i class="bi bi-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i class="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#">
                                                <i class="bi bi-pinterest"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-8 col-sm-6">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Cakes</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Blackforest</a>
                                        </li>
                                        <li>
                                            <a href="#">Bodhubon</a>
                                        </li>
                                        <li>
                                            <a href="#">Rongdhonu</a>
                                        </li>
                                        <li>
                                            <a href="#">Meghrong</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle mb-20">
                                    <h4>Contact Us</h4>
                                    <p style=" margin-top: 2rem">76/A, Green Lane, Dhanmondi, NYC</p>
                                </div>
                                <ul class="mb-20">
                                    <li class="number">
                                        <a href="#">+10 (78) 738-9083</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
export default  {
    components: {
        Carousel,
        Slide,

    },
    data(){
        return{
            photo: [
                {
                    id: 1,
                    images: require("../assets/images/cake2.png")
                }, {
                    id: 2,
                    images: require("../assets/images/cake3.png")
                }, {
                    id: 3,
                    images: require("../assets/images/cake4.png")
                },
                {
                    id: 4,
                    images: require("../assets/images/cake5.png")
                },
                {
                    id: 5,
                    images: require("../assets/images/cake3.png")
                },
            ],
        }
    }
}
</script>