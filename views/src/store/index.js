import Vue from 'vue'
import Vuex from 'vuex'
import commodity from './modules/commodity'
import shoppingCart from './modules/shoppingCart'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        commodity,
        shoppingCart
    },
    getters
});

export default store
