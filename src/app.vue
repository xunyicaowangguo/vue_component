<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos='todos'/>
      <Footer/>  
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
         todos:[
            {id:1, title:'xxx', complete:false},
            {id:3, title:'yyy', complete:true},
            {id:5, title:'zzz', complete:false}
          ]
        }
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo)
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
