import Vue from 'vue'
import Vuex from 'vuex'
import commodity from './modules/commodity'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        commodity
    },
    getters
});

export default store
