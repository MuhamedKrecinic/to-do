<template>
  <div class="donelist">
      <div class="top">
          <section>
          <h4>Done</h4>
          <button @click="remove()" > <img src="../assets/trash2.png" alt="" width="24" height="24"> </button>
          </section>
          </div>
    <div class="notes">
          
          <draggable 
          :options="{group:{pull:false,put:false},animation: 0}"
                group="a"
                @change="log" 
             v-model="exampleList2" item-key="element" >
               <template #item="{element}"> 
                   
                  <div class="doneNotes" v-if="element.completed">
                     <input onclick="return false" type="checkbox" id="cbox" v-model="element.completed"  >
                      <p>{{element.body}}</p>
                  </div>
                  
            </template>
          </draggable>
     
  </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    components:{
        draggable
    },
    name:"Donelist",
    data(){
        return{
            notess:[],
            bool:true,
            obj:{}
        }
    },
    computed:{
        exampleList2: {
    get() {
      return this.$store.state.todos
    },

    set(val) {
      this.$store.commit('setExampleList', val)
    }
  }
    },
    methods:{
         completedTodo(todo){
            this.$store.dispatch('completedTodo2',todo)
        },
        log(event){
           console.log(event)
           if(event.added){
               
             event.added.element.completed=true
           }
           if(event.removed){
             event.removed.element.completed=false
           }
            
            //console.log(this.obj)
            //completeTodo(this.obj)
        },
        remove(){
            for(let i=0;i<this.$store.getters.getNotess.length;i++){
                this.$store.getters.getNotess[i].completed=false
            }
        }
        
    },
        updated(){
        this.notess=this.$store.getters.getNotess 
    }
    
}
 
</script>

<style scoped>

.this{
    min-height: 250px;
    background-color:red
}

.notes{
    width:420px;
    margin:0px auto;
    justify-content: flex-end;
    margin-top:25px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    
    
    
}
#cbox{
    height:24px;
    width: 24px;
}
.doneNotes{
    display: flex;
    align-items: center;
    width:100%; 
    margin: 0px auto;
    margin-top:20px;
    border-radius:5px;
    min-height: 32px;
    height: 32px;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 300;
}
.doneNotes:hover{
    background-color:rgb(202, 197, 197);
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
    

button{
    width:24px;
    height:24px;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
}
.donelist{
     background-color: white;
    width: 554px;
    min-height: 475px;
    z-index: 0;
    overflow:visible;
    border:1px rgb(218, 216, 216) solid
    
}

button{
    width:24px;
    height: 24px;
}
.note{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 24px;
    margin-top:20px
    
}

</style>