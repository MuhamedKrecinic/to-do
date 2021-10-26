<template>
<div class="container">
  <div class="header">
      
      <div class="todobox">

          <img src="../assets/icon.svg" alt="icon" >
          <p style="color:white">Todobox</p>


      </div>
      

      <div class="userinfo">
          <div class="part1">
          <p style="color:white">Username</p>
          <button @click="logIn()"><img id="user" src="../assets/user.png" alt=""></button>
          </div>
          <div v-show="login" class="part2">
              
                  
                
              <router-link id="rlink" to="/"><img id="image123" src="../assets/logout.png" alt=""> <p>Log out</p></router-link>
              
              
          </div>
      </div>

  </div>
  </div>

</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            login:false
        }
    },
    methods:{
        logIn(){
            this.login= !this.login
        }
    }

}
</script>

<style scoped>
.container{
    background-color: #232C33;
    
}
#image123{
    background-color: white;
    width: 24px;
    height: 24px;
    
}
#rlink{
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    margin-left:10px;
    width: 95px;
    justify-content: space-between;
}
#rlink p{
    color:black;
    font-family: Roboto;
    font-weight: 300;
}
button{
    background-color: inherit;
    border:none;
}
.header{
    width: 1130px;
    height: 80px;
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.todobox{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.todobox p{
    width:64px;
    font-size: 14px;
    text-align: left;
    padding-left:17px;
}
.userinfo{
    display: flex;
    flex-direction: column;
    height:40px;
    width:134px;
    margin:20 auto;
    justify-content: flex-start;
    align-items: flex-end;
    
   
    
    
}
#user{
  border-radius: 100%;
  width: 40px;
  height: 40px;
}
.userinfo p{
    font-size: 14px;
    text-align: right;
    padding-right:17px;
}
.part1{display: flex;
height: 40px;}


.part2{
    width:240px;
    min-height: 64px;
    background-color: white;
    
    margin-top:5px;
    margin-bottom: -30px;
    border: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    
}
.part2 p{
    font-size: 14px;
    color:black;
    font-family: Roboto;
    font-weight: 500;
    
}
.wrap{
    width:82px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
}

</style>