<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"/> -->
      <!-- <Header @addTodo2="addTodo"/> -->
      <Header ref="header"/>
      <!-- <List :todos="todos" :deleteTodo="deleteTodo"/> -->
      <List :todos="todos" ref="list"/>
      <!-- <Footer :todos="todos" :checkAllTodos="checkAllTodos" :cleanCompleteTodo="cleanCompleteTodo"/>   -->
      <Footer :todos="todos" :cleanCompleteTodo="cleanCompleteTodo" ref="footer"/>  
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

      // this.$vm.$on('deleteTodo',(index)=>{
      //   this.todos.splice(index,1)
      // })
      this.$globalEventBus.$on('deleteTodo',this.deleteTodo)
      this.$globalEventBus.$on('checkAllTodos',this.checkAllTodos)
      //给<Header>组件对象绑定自定义事件监听
      //绑定自定义事件监听和分发事件的组件对象得是同一个
      this.$refs.header.$on('addTodo2',this.addTodo)

      setTimeout(()=>{
        // this.todos = JSON.parse(localStorage.getItem('todos_key')) || []
        this.todos = JSON.parse(localStorage.getItem('todos_key'|| '[]')) 
      },1000)
    },

    beforeDestroy(){
      //解绑自定义事件监听
      this.$refs.header.$off('addTodo2')
      this.$refs.list.$off('deleteTodo')
      this.$refs.footer.$off('checkAllTodos')
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
        if(confirm('确定删除吗？')){
          this.todos = this.todos.filter( todo => !todo.complete )
        }
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
