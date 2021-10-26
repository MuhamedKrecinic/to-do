<template>
<div class="view">
 
  
   <router-view>
   </router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue"
import Main from "./components/Main.vue"
import draggable from 'vuedraggable'

export default {
  name: 'App',
  components: {
    draggable,
    Main,
    Login
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding:0;
  display: flex;
  min-width:100vw;
  
  
}
body{
  margin:0;
  padding:0;
  display:flex;
  min-width: 100vw;
  
}



</style>
