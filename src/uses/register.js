import { ref } from "vue"
import router from "../router";
export default function() {
    const register = ref({
        name: "",
        email: "",
        password: "",
    })
    const errorName = ref({
        text: "",
        status: false
    })
    const successName = ref({
        text: "",
        status: false,
    })
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

    function onRegister() {
        if (register.value.name.length == 0) {
            errorName.value.text = "Name cannot be left blank";
            errorName.value.status = true;
        } else if (register.value.name.length < 6 || register.value.name.length > 18) {
            errorName.value.text = "Name must be between 6 and 18 characters.";
            errorName.value.status = true;
        } else if (register.value.name.length > 5 || register.value.name.length < 19) {
            successName.value.text = "Success!!";
            successName.value.status = true;
            errorName.value.status = false;

        } else {
            errorName.value.text = "";
            errorName.value.status = false;
        }
        const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
        if (register.value.email.length == 0) {

            errorEmail.value.text = "Email cannot be left blank",
                errorEmail.value.status = true
        } else if (!regex.test(register.value.email)) {

            errorEmail.value.text = "Email invalidate",
                errorEmail.value.status = true
        } else if (regex.test(register.value.email)) {
            successEmail.value.text = "Success!!";
            successEmail.value.status = true;
            errorEmail.value.status = false
        } else {
            errorEmail.value.text = "",
                errorEmail.value.status = false
        }

        if (register.value.password.length == 0) {
            errorPassword.value.text = "Password cannot be left blank";
            errorPassword.value.status = true;
        } else if (register.value.password.length < 6) {
            errorPassword.value.text = "password is only 6 characters";
            errorPassword.value.status = true;
        } else if (register.value.password.length >= 6) {
            successPassword.value.text = "Success!!";
            successPassword.value.status = true;
            errorPassword.value.status = false;

        } else {
            errorPassword.value.text = "";
            errorPassword.value.status = false;
        }

        if (errorPassword.value.status == false && errorEmail.value.status == false && errorName.value.status == false) {

            let regs = JSON.parse(localStorage.getItem('register'));
            let arr = [];
            arr.push(register.value);
            if (regs == null) {
                localStorage.setItem('register', JSON.stringify(arr));
            } else if (regs != null) {
                regs.push(register.value);
                localStorage.setItem('register', JSON.stringify(regs));
            }
            router.push('/login');
        }
    }
    return { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword }
}