<template>
  <div>
     <transition-group name="list" tag="ul">
    
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                v-on:click="toggleComplete({todoItem, index})"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
                <i class="fa-solid fa-trash-can"></i>
            </span>
        </li>
    
     </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
    // data:function(){
    //     return{
    //         todoItems: []
    //     }
    // },
    // props: ['propsdata'],
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),

        // removeTodo(todoItem, index){
        //     // this.$emit('removeItem', todoItem, index);
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },
        // toggleComplete(todoItem, index){
        //     // todoItem.completed = !todoItem.completed;
        //     // // localStorage 데이터 갱신
        //     // localStorage.removeItem(todoItem.item);
        //     // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        //     // this.$emit('toggleItem', todoItem, index);
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed : {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // }
        ...mapGetters(['storedTodoItems']),
        // ...mapGetters({  
        // 저장되어 있는 getters의 함수명과 실제 뿌려주는 변수명이 다를때 위의 배열이 아닌 밑의 객체형식으로 사용한다.
        //     todoItem : 'storedTodoItems'
        // })
    }
    // created(){
    //     if(localStorage.length > 0){
    //         for(var i = 0; i < localStorage.length; i ++){
    //             if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
    //                 JSON.parse(localStorage.getItem(localStorage.key(i)));
    //                 this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //             }
    //         }
    //     }
    // }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
.checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted{
    color: #b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color: #b3adad;
}

/* 아이템 트랜지션 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>