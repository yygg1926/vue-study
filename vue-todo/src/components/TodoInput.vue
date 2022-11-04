<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <AlertModal :show="showModal" @close="showModal = false" v-bind:propsdata="showModal">
      <template #header>
        <h3>경고!<i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i></h3>
      </template>
      <template #body>
        <h3>아무것도 입력하지 않으셨습니다.</h3>
      </template>
      
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
    data(){
        return{
            newTodoItem: "",
            showModal:false
            
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                // var obj = {completed: false, item: this.newTodoItem};
                // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                // this.$emit('이벤트 이름', 인자1, 인자2, ....);
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        // AlertModal: AlertModal
        AlertModal
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
.closeModalBtn{
    color: #42b983;
}
</style>