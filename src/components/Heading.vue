<template>
<div class="heading">
  <div>
  <h1>Manage your to do list</h1>
  <p>Click on checkbox or drag and drop to done</p>
  </div>
  <p></p>
</div>
  
</template>

<script>
export default {
    name:"Heading"

}
</script>


<style scoped>
.heading{
  width: 1130px;
  text-align: left;
  display: flex;
  margin:0 auto;
  justify-content: space-between;
  margin-bottom: 60px;
  
  
}
h1{
  color: #222222;
  font-family: Roboto;
  font-size: 48px;
  line-height: 58px;
  text-align: left;
}
p{
  margin-top:-30px;
  color: #222222;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}



</style>