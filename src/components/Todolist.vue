<template>

  <div class="todolist">
      
      <section>
          <h4>To do</h4>
          <button @click="addTodo()"  width="24" height="24"><img src="../assets/addButton.png" alt="" width="24" height="24"></button>
      </section>
      

<div class="notes">

      <div class="note">
  
                <draggable  :options="{group:{pull:false,put:false},animation: 0}"
                group="a"
             v-model="exampleList" item-key="element"
            
                >
                <template #item="{element}" > 
                    <div   class="input"  @mouseenter="hover(element)" @mouseleave="hover(element)">
                    <div class="container">                    
                        <img id="exampleImg" src="../assets/example.png" alt="" v-if="element.img" width="420" height="200">
                <div class="wrap">
                <div class="part1" >  
                    <input type="checkbox"

                    v-model="element.completed" 
                    id="cbox" 
                    @click="completedTodo(element)">
                    
    
                    <input :class="element.completed? classname:null" @input="getTodo" @change ="fillTodo(element)"  placeholder="Create new task..." :value="element.body" type="text"  id="txt"  >
                </div>
                <div class="part2">

                    <button id="btn" @click ="clicked(element)"><img v-show="element.hover" src="../assets/dots.png" alt="" width="20" height="20"></button>
                    
                        <div class="options" @mouseleave="clicked(element)" v-if="element.clicked">
                            <button id="menu" @click="img(element)">
                                <img src="../assets/image.png" alt="" width="20" height="20">
                                <p>Image</p>
                            </button>

                            <button id="menu" @click="removeTodo(element)">
                                <img src="../assets/trash.png" alt="" width="20" height="20">
                                <p>Delete</p>
                            </button>
                            
                        </div>
                </div>
                </div>
                </div>
                </div> 
                </template>
               </draggable>
             </div> 
 
         </div>

     </div>
     

 
     
 
  
</template>

<script>
  import draggable from 'vuedraggable'
  

export default {

    components:{
        draggable
    },
    name:"Todolist",
    methods:{
       
        
        
        addNote(){
            this.counter+=1; 
        },
        getTodo(e){
            this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo(){
                this.$store.dispatch('addTodo')
                
            },
        fillTodo(todo){
                this.$store.dispatch('fillTodo',todo)
                this.$store.dispatch('clearTodo')
                
            },
        completedTodo(todo){
            this.$store.dispatch('completedTodo',todo)
        },
         clicked(todo){
            this.$store.dispatch('clicked',todo)
        },
        hover(todo){
            this.$store.dispatch('hover',todo)
        },
        img(todo){
            this.$store.dispatch('img',todo)
        },
        removeTodo(todo){
            this.$store.dispatch('removeTodo',todo)
            this.counter--
        },
       
        
        
        

    },
    data(){
        return{
            counter:0,
            note:"",
            notess:[],
            bool:true,
            show:false,
            obj:{},
            enabled:true,
            dragging:false,
            classname:'corss'
            
        }
    },
    
    updated(){
        this.notess=this.$store.getters.getNotess
        console.log(this.notess)
    },
    computed:{
        newTodo(){
            return this.$store.getters.newTodo
        },
        todos(){
            return this.$store.getters.todos
        },
        exampleList: {
    get() {
      return this.$store.state.todos
    },

    set(val) {
      this.$store.commit('setExampleList', val)
    }
  }
        
        
    },
    beforeMount(){
        /*this.getTodo(obj)
        this.addTodo(obj)
        console.log(this.notess)*/
    }
    
    
}
</script>

<style scoped>
input{
    cursor: pointer;
}
.wrap{
    display:flex;
    width: 100%;
}
#exampleImg{
    
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.part2{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: flex-start;
    margin-right:15px;
    
}
#menu{
    height: 50%;
    width:100%;
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    background-color:white;
    border:none
}
#menu:hover{
    background-color:rgba(14, 120, 207, 0.5)
}
#menu p{
    margin-left:-50px
}
#menu img{
    margin-left:-40px
}
.container2{
    display:flex

}
.options{
    width:150px;
    height: 70px;
    border:1px black solid;
    z-index: 100;
    background-color:white;
    overflow: hidden;
    margin-right:-152px;
    margin-bottom:-50px
    
}

.todolist{
    background-color: white;
    width: 554px;
    min-height: 475px;
    display: flex;
    flex-direction: column;
    border:1px rgb(218, 216, 216) solid
    
}
section{
     width:420px;
    height: 50px;
    border-bottom: 1px #DEDEDE solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
    margin-top:21px;
    margin-bottom: 11px;
    }
#btn{
    width:20px;
    height: 20px;
    border:none;
    background-color:inherit;
    
    
}
button{
    width:24px;
    height:24px;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;

   
}

.note{
    
    width: 100%;
    margin:0;
    margin-top:-6px
    
    
}
.container{
    width: 100%;
}
.input{
    display: flex;
    align-items: center;
    width:100%;
    min-height: 24px;
    margin: 0px auto;
    margin-top:20px;
    border-radius:5px;
    
    
    
}
.input:hover{
    
    background-color:rgb(202, 197, 197)
}

.part1{
    width: 100%;
    line-height: 20px;
    display:flex;
    align-items:center;
    height: 32px;
    
    
}

.labels{
    width:50px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom:25px;
}
.notes{
    width:420px;
    margin:0px auto;
    margin-top:20px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    
    
    
    
   
}
#cbox{
    height:24px;
    width: 24px;
    
    
}
#txt{
    
    height: 18px;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 300;
    outline:none;
    border:none;
    background-color:inherit;
}
.corss{
    text-decoration: line-through red;
    
}

</style>