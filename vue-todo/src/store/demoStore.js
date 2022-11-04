import Vue from 'vue'
import Vuex from 'vuex'

// 이걸 선언함으로서 다른 vue에서 이 js를 $store로 사용할 수 있게 된다.
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters : {
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price*2;
        },
        triplePrice(state){
            return state.price * 3;
        }
    }
})