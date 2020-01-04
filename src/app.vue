<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :checkAllTodos="checkAllTodos" :cleanCompleteTodo="cleanCompleteTodo"/>  
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';
  export default {

    data(){
      return {
        // todos:[
        //   {id:1, title:'xxx', complete:false},
        //   {id:3, title:'yyy', complete:true},
        //   {id:5, title:'zzz', complete:false}
        // ]
        todos: []
      }
    },
    mounted(){
      setTimeout(()=>{
        // this.todos = JSON.parse(localStorage.getItem('todos_key')) || []
        this.todos = JSON.parse(localStorage.getItem('todos_key'|| '[]')) 
      },1000)
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      checkAllTodos(isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)
      },
      cleanCompleteTodo(){
        // this.todos = this.todos.filter((todo)=>{return !todo.complete})
        this.todos = this.todos.filter( todo => !todo.complete )
      },
    },
    watch:{
      todos:{
        deep:true,
        handler:function(value){
          // console.log(value);
          localStorage.setItem('todos_key',JSON.stringify(value))
        }
      }

    },
    components:{
      Header,
      List,
      Footer,
    } 
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
 
</style>
