<template>
  <div>
    {{str}}
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// ==위와 같은 의미
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }
export default {
  data:function(){// vue 3부터는 data에 콧수염 괄호로 적지 못하고, function을 이용해 값을 리턴해줌으로서 재사용성을 높이고자 함
    return{
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr : function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>