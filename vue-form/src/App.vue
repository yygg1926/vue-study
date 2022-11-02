<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username">
      <!-- v-model 은 2way data binding이라는 기술을 이용해 
      input에 입력하면 v-model의 대상에 데이터가 바인딩 되고 데이터에 직접
      값을 설정해주면 v-model로 설정되어있는 input에도 데이터가 동시에 바인딩된다 -->
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function(){
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>