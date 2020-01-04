<template>
  <div>
      <h2>{{msg}}</h2>
      <HelloWorld/>
      <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  export default {
      data(){
          return{
              msg:'First Vue Component!'
          }
      },

      components:{
          HelloWorld
      }
  }
</script>

<style scoped>
    h2{
        color: #899;
    }
 
</style>
