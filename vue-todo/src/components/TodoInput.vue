<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <AlertModal :show="showModal" @close="showModal = false" v-bind:propsdata="showModal">
      <template #header>
        <h3>경고!</h3>
      </template>
      <template #body>
        <h3>무언가를 입력하세요.</h3>
      </template>
      <template #footer>
        <h3>copy right</h3>
      </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
    data: function(){
        return{
            newTodoItem: "",
            showModal:false
            
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodoItem !== ''){
                // var obj = {completed: false, item: this.newTodoItem};
                // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                // this.$emit('이벤트 이름', 인자1, 인자2, ....);
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components:{
        AlertModal: AlertModal
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>