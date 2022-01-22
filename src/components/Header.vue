<template>
    <header>
        <div class="container-fuild">
            <nav class="navbar navbar-expand-lg navbar-light" style="padding: 0 30px">
                <div class="logo">
                    <img src="../assets/images/logo2.jpg" style="width:100px" />
                </div>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav" style="padding: 35px;">
                        <li class="nav-item">
                            <a class="nav-link">
                                <router-link :to="{ name: 'Home' }">Home</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link :to="{ name: 'san-pham' }">Product</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <input
                                v-if="isShowModal"
                                type="text"
                                class="form-control"
                                placeholder="Search Name *"
                                v-model="searchText"
                                style="width:243px;"
                            />
                            <div v-if="searchText" class="search">
                                <ul v-for="proc in productFilter" :key="proc.id">
                                    <li>
                                        <router-link
                                            :to="{ name: 'product-detail', params: { id: proc.id } }"
                                        >{{ proc.name }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="nav justify-content-end menu">
                    <li class="nav-item">
                        <a v-on:click="onToggleModal" class="nav-link text">
                            <i class="bi bi-search"></i>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text" href="#">
                            <i class="bi bi-telephone-fill"></i> 0362388823
                        </a>
                    </li>
                    <li class="nav-item" v-if="user">
                        <a class="nav-link text">
                            <i class="bi bi-people-fill"></i>
                            {{ user.name }}
                        </a>
                        <ul>
                            <li class="nav-item">
                                <a @click="logout">LogOut</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item" v-else>
                        <a class="nav-link text">
                            <i class="bi bi-people-fill"></i> User
                        </a>
                        <ul>
                            <li class="nav-item">
                                <router-link :to="{ name: 'Login', params: {} }">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'Register', params: {} }">Register</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn-header" href="#">
                            <router-link :to="{ name: 'gio-hang' }">Order Online </router-link>
                            <span class="badge badge-light">{{total}}</span>
                        </a>
                        
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
import { computed } from '@vue/reactivity';
import useProduct from "../uses/fetchProduct"
import { ref } from "vue"
export default {
    setup() {
        const { Prod,items, fetchAll } = useProduct();
        const searchText = ref("");
        const isShowModal = ref(false);
        const user = JSON.parse(localStorage.getItem("user"));
        function logout() {
            localStorage.removeItem("user");
           document.location.href = "/login";
        }
        console.log(user);
        const productFilter = computed(() => {
            return Prod.value.filter((Prod) => {
                return (
                    Prod.name
                        .toLowerCase()
                        .indexOf(searchText.value.toLowerCase()) != -1
                );
            });
        });
        console.log(productFilter);
        function onToggleModal() {
            isShowModal.value = !isShowModal.value
            console.log(!isShowModal.value);

        }
        let total = items.length;
        console.log(total);
        fetchAll();
        return { user, logout, productFilter, onToggleModal, isShowModal, searchText,total }
    }
}
</script>