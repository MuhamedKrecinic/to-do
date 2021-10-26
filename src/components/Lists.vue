<template>
  <div class="lists">
      
      <Todolist/>
      <Donelist/>

  </div>
</template>

<script>
import Todolist from "./Todolist.vue"
import Donelist from "./Donelist.vue"
export default {
    name:"lists",
    components:{
        Todolist,
        Donelist
    }
    
}
</script>

<style>
.lists{
    margin-top:40px;
    width: 1130px;
    display: flex;
    justify-content: space-between;
    align-items:center;
}

</style>