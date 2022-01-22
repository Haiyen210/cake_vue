<template>
    <div class="slider-cart slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
                            <h1 style="font-size: 78px">Register</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="login_register_wrap section" style="padding-top: 7rem; padding-bottom: 7rem">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-md-10">
                    <div class="login_wrap">
                        <div class="padding_eight_all bg-white">
                            <div class="text-center pb-4">
                                <h3>Create account</h3>
                            </div>
                            <form method="post" @submit.prevent="onRegister">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        :class="{ error: errorName.status, success: successName.status }"
                                        v-model="register.name"
                                    />
                                    <p
                                        class="text-error"
                                        v-if="errorName.status"
                                    >{{ errorName.text }}</p>
                                    <p
                                        class="success-text"
                                        v-if="successName.status"
                                    >{{ successName.text }}</p>
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        :class="{ error: errorEmail.status, success: successEmail.status }"
                                        v-model="register.email"
                                    />
                                    <p
                                        class="text-error"
                                        v-if="errorEmail.status"
                                    >{{ errorEmail.text }}</p>
                                    <p
                                        class="success-text"
                                        v-if="successEmail.status"
                                    >{{ successEmail.text }}</p>
                                </div>
                                <div class="form-group">
                                    <input
                                        class="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        :class="{ error: errorPassword.status, success: successPassword.status }"
                                        v-model="register.password"
                                    />
                                    <p
                                        class="text-error"
                                        v-if="errorPassword.status"
                                    >{{ errorPassword.text }}</p>
                                    
                                    <p v-if="successPassword.status"
                                        class="success-text"
                                    >{{ successPassword.text }}</p>
                                </div>
                                <div class="login_footer form-group">
                                    <div class="chek-form">
                                        <div class="custome-checkbox">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="exampleCheckbox2"
                                                value
                                            />
                                            <label class="form-check-label" for="exampleCheckbox2">
                                                <span>I agree to the Terms and Policy.</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-fill-out btn-block"
                                        name="register"
                                    >Sign Up</button>
                                </div>
                            </form>
                            <div class="different_login">
                                <span>or</span>
                            </div>
                            <ul class="btn-login list_none text-center">
                                <li>
                                    <a href="#" class="btn btn-facebook">
                                        <i class="ion-social-facebook"></i>Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-google">
                                        <i class="ion-social-googleplus"></i>Google
                                    </a>
                                </li>
                            </ul>
                            <div class="form-note text-center">
                                Are you ready to create an account?
                                <router-link :to="{ name: 'Login', params: {} }">
                                    <a>Login</a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useRegister from "../uses/register"
export default {
    setup() {
        const { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword } = useRegister();
        return { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword }
    }
}
</script>