<template>
    <div class="slider-cart slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
                            <h1 style="font-size: 78px">Order Success</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section" style="padding-top: 7rem; padding-bottom: 7rem">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center order_complete">
                        <i class="fas fa-check-circle"></i>
                        <div class="heading_s1">
                            <h3>Order Success!</h3>
                        </div>
                        <p>Thank you for your order! Your orders are being processed and should be completed within 3-6 hours. You will receive a confirmation email when your order is completed.</p>
                        <router-link
                            :to="{ name: 'san-pham' }"
                            class="btn btn-fill-out"
                        >Continue shopping</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>