import { createStore } from 'vuex';
// Vue.use(Vuex);
const store = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem("cart")),
    },
    getters: {
        proid: (state) => (product) => {
            const item = state.cart.find(i => i.id === product.id)
            if (item) return item.quantity
            else return null
        }

    },
    mutations: {
        onCount(state, ProId) {
            // let cart = JSON.parse(localStorage.getItem("cart"));
            let indexs = state.cart.find(i => i.id === ProId);
            console.log(indexs);
            if (indexs) {
                indexs.quantity += 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        onCountMinus(state, proId) {
            // let cart = JSON.parse(localStorage.getItem("cart"));
            let indexs = state.cart.find(({ id }) => id === proId);
            console.log(indexs);
            if (indexs) {
                indexs.quantity -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },

    actions: {
        onCount({ commit }, proId) {
            commit('onCount', proId);
        },
        onCountMinus({ commit }, proId) {
            commit('onCountMinus', proId);
        },

    },
    modules: {},
});
export default store;