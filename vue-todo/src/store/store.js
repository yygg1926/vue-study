import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

// 이걸 선언함으로서 다른 vue에서 이 js를 $store로 사용할 수 있게 된다.
Vue.use(Vuex);

// const storage = {
//     fetch(){
//         const arr = [];
//         if(localStorage.length > 0){
//             for(let i = 0; i < localStorage.length; i ++){
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     },
// };

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});