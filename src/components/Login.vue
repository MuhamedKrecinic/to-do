<template>
  <div class="login">

      <div class="form">

          <div class="image">
              <img src="../assets/login.png" alt="" width="199" height="61">
          </div>

          <div class="inputs">

              <div class="email">
                  <input id="e-mail" placeholder="e-mail" type="text" v-model="email">
              </div>

              <div class="password">
                  <input id="psw" placeholder="password" type="password" v-model="password" >
              </div>

              <div class="remember">
                  <div class="one">
                      <input type="checkbox">
                      <p id="rememberme">Remember me</p>
                  </div>

                  <div class="two">
                     <p id="forgot"> Forgot password?</p>
                  </div>
              </div>

              <div class="libutton">
                  <router-link v-model="bool" id="libutton" :to="this.destination" @mouseenter="validation()">Login</router-link>
              </div>


          </div>

      </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            password:"",
            email:"",
            destination:"/"
        }
    },
    methods:{
        validation(){
            if(this.password=="pass123" && this.email=="user@gmail.com"){
                this.destination="/home"
            }
        }
    }

}
</script>

<style scoped>
.login{
    
    min-height: 100vh;
    min-width:100vw;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.form{
    height: 504px;
    width: 440px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


}

.inputs{
    height: 267px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.email{
    width:312px;
    height: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(107, 106, 106);
    border-radius: 5px;
}
.email:hover{
    border:1px solid rgb(23, 23, 226);
}
#e-mail{
    width: 100%;
    height: 90%;
    font-size: 16px;
    border:none;
    outline: none;
    
    
}
.password{
    width:312px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(107, 106, 106);
    border-radius: 5px;
}
.password:hover{border:1px solid rgb(23, 23, 226);}
#psw{
    width: 100%;
    height: 90%;
    font-size: 16px;
    border:none;
    outline: none;
}
.remember{
    width:312px;
    height: 40px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#rememberme{
    font-size: 14px;
    color:rgb(107, 106, 106)
}
.one{

    display: flex;
    align-items: center;
    justify-content: space-between;
    width:120px
}
.libutton{
    width:312px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}
#libutton{
    background-color: #425BD9;
    width:100%;
    height: 100%;
    color:white;
    border:none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

}
#forgot{
    font-size: 16px;
    color: blue;
    font-family: Roboto;
    font-weight: 700;
}




</style>