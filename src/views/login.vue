<template>
    <div class="slider-cart slider-area">
        <div class="slick-tract" style="opacity: 1; min-height: 400px;">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
                            <h1 style="font-size: 78px">Login</h1>
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
                                <h3>Login</h3>
                            </div>
                            <form method="post" @submit.prevent="onLogin">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        :class="{ error: errorEmail.status, success: successEmail.status }"
                                        v-model="login.email"
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
                                        v-model="login.password"
                                    />
                                    <p
                                        class="text-error"
                                        v-if="errorPassword.status"
                                    >{{ errorPassword.text }}</p>
                                    <p
                                        class="success-text"
                                        v-if="successPassword.status"
                                    >{{ successPassword.text }}</p>
                                </div>
                                <div class="login_footer form-group">
                                    <div class="chek-form">
                                        <div class="custome-checkbox">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="exampleCheckbox1"
                                            />
                                            <label class="form-check-label" for="exampleCheckbox1">
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                    </div>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-fill-out btn-block"
                                        name="login"
                                    >Log in</button>
                                </div>
                            </form>
                            <div class="different_login">
                                <span>Hoặc</span>
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
                                Do not have an account?
                                <router-link :to="{ name: 'Register', params: {} }">Register now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
export default {
    setup() {
        const login = ref({
            name:"",
            email: "",
            password: "",
        });
        const errorEmail = ref({
            text: "",
            status: false
        })
        const successEmail = ref({
            text: "",
            status: false,
        })
        const errorPassword = ref({
            text: "",
            status: false
        })
        const successPassword = ref({
            text: "",
            status: false,
        })
        function onLogin() {
            const user = JSON.parse(localStorage.getItem("register"));
            let emails = "";
            let  passwords = "";
            let names ="";
            for (let i = 0; i < user.length; i++) {
                if( login.value.email == user[i].email){
                    emails = user[i].email;
                    passwords = user[i].password;
                    names = user[i].name;
                }
                   
                
            }

            const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
            if (login.value.email.length == 0) {
                errorEmail.value.text = "Email cannot be left blank",
                errorEmail.value.status = true
            } else if (!regex.test(login.value.email)) {
                errorEmail.value.text = "Email invalidate",
                errorEmail.value.status = true
            } else if (login.value.email != emails) {
                errorEmail.value.text = "Email does not match registration",
                errorEmail.value.status = true
            }
            else if (regex.test(login.value.email)) {
                successEmail.value.text = "Success!!";
                successEmail.value.status = true;
                errorEmail.value.status = false
            }
            else {
                errorEmail.value.text = "",
                errorEmail.value.status = false
            }

            if (login.value.password.length == 0) {
                errorPassword.value.text = "Password cannot be left blank";
                errorPassword.value.status = true;
            } else if (login.value.password.length < 6) {
                errorPassword.value.text = "password is only 6 characters";
                errorPassword.value.status = true;
            } else if (login.value.password != passwords) {
                errorPassword.value.text = "Password does not match registration",
                errorPassword.value.status = true

            } else if (login.value.password.length >= 6) {
                successPassword.value.text = "Success!!";
                successPassword.value.status = true;
                errorPassword.value.status = false;
            }
            else {
                errorPassword.value.text = "";
                errorPassword.value.status = false;
            }
            if ( errorPassword.value.status == false &&  errorEmail.value.status == false) {
                login.value.name = names;
                localStorage.setItem('user', JSON.stringify(login.value));
                document.location.href = "/";

            }


        }
    
        return { onLogin, login, errorEmail, successEmail, errorPassword, successPassword }
    }
}
</script>