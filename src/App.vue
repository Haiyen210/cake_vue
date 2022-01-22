<template>
  <app-header >
  </app-header>
  <router-view />
<app-footer></app-footer>
</template>

<script>
// import Product from "./pages/Product.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    // ProductApp: Product,
    AppHeader: Header,
    AppFooter: Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
