<template>
  <div class="body">


   <Header/>
  <Heading/>
  <div class="center">
  <Lists/>
  </div>


   

  </div>
</template>

<script>
import Header from './Header.vue'
import Heading from "./Heading.vue"
import Lists from "./Lists.vue"
export default {
    name:'Main',
    components:{
        Header,
        Heading,
        Lists
    }
}
</script>

<style scoped>

.body{
    min-height:100vh;
    min-width:100vw;
    position:relative;
    background-image:url("../assets/bgcharacter.svg");
    background-position:  69.5% 15px;
    background-repeat: no-repeat;
    background-color: rgba(241, 241, 241, 1);
}



#background{
  z-index: -1;
  position:absolute;
  top: 20px;
  right: 15%;
  width:550px;
  height: 509px;
}
.center{
 display:flex;
 justify-content: center;
}

</style>