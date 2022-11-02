<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- <todo-list v-bind:내려보낼 프롭스 속성 이름 ="현재위치의 컴포넌트 데이터 속성"></todo-list> -->
    <todo-list v-bind:propsdata="todoItems" 
    v-on:removeItem="removeOneItem" 
    v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function(){
    return{
      todoItems :[]
    }
  },
  methods: {
    addOneItem: function(todoItem){
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // localStorage 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function(){
      if(localStorage.length > 0){
          for(var i = 0; i < localStorage.length; i ++){
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  JSON.parse(localStorage.getItem(localStorage.key(i)));
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>