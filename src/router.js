import { createRouter, createWebHistory } from "vue-router"
import Product from "./views/Product"
import ProductDetail from "./views/productDetail"
import NotFound from "./views/404"
import Cart from "./views/Cart"
const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ( /*webpackChunkName: "home" */ "./views/home"),
    },
    {
        path: "/product",
        name: "san-pham",
        component: Product
    },
    {
        path: "/product/:id",
        name: "product-detail",
        component: ProductDetail
    },
    {
        path: "/cart",
        name: "gio-hang",
        component: Cart
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ( /*webpackChunkName: "register" */ "./views/register"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /*webpackChunkName: "login" */ "./views/login"),
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () =>
            import ( /*webpackChunkName: "checkout" */ "./views/checkout"),
    },
    {
        path: "/checkout_success",
        name: "Checkout_Success",
        component: () =>
            import ( /*webpackChunkName: "checkout_success" */ "./views/checkout_success"),
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;