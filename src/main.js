import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import { createStore } from 'vuex'
import Vuex from 'vuex'
import Sortable from 'vue-sortable'
import VueRouter from 'vue-router'
import {createWebHistory,createRouter} from 'vue-router'



const routes = [
    { path: '/home', component: Main },
    { path: '/', component: Login }

  ]

  const router = createRouter({
    history: createWebHistory(),
    
    routes 
  })

const myApp = createApp(App);

const store=createStore({
    state:{
        newTodo:"",
        todos:[{
            body:"",
            completed:false,
            clicked:false,
            hover:false,
            img:false
        }]
    },
    mutations:{
        setExampleList (state, value) {
            state.todos=state.todos
          },

        GETTODO(state,todo){
            state.newTodo=todo;
        },
        ADDTODO(state){
            
            state.todos.push({
            })
        },
        FILLTODO(state,todo){
            todo.body=state.newTodo
            
        },
        CLEARTODO(state){
            state.newTodo= ""
        },
        COMPLETEDTODO(state,todo){
           todo.completed= !todo.completed
        },
        REMOVETODO(state,todo){
            
            state.todos.splice(state.todos.indexOf(todo),1)
        },
        CLICKED(state,todo){
            todo.clicked= !todo.clicked
         },
         HOVER(state,todo){
            todo.hover= !todo.hover
         },
         IMG(state,todo){
            todo.img= !todo.img
         }
         
        
    },
    actions:{
        getTodo({commit},todo){
            commit('GETTODO',todo)
        },
        addTodo({commit}){
            commit('ADDTODO')
        },
        fillTodo({commit},todo){
            commit('FILLTODO',todo)
        },
        clearTodo({commit}){
            commit('CLEARTODO')
        },
        completedTodo({commit},todo){
            commit('COMPLETEDTODO',todo)
        },
        removeTodo({commit},todo){
            commit('REMOVETODO',todo)
        },
        clicked({commit},todo){
            commit('CLICKED',todo)
        },
        hover({commit},todo){
            commit('HOVER',todo)
        },
        img({commit},todo){
            commit('IMG',todo)
        }
    },
    modules:{},
    getters:{
        getNotess:state=> state.todos,

        todos: state=>state.todos.filter((todo)=>{return !todo.completed}),
        newTodo: state=>state.newTodo,
        completedTodos:state=>state.todos.filter((todo)=>{return todo.completed}),
        clicks: state=>state.todos.filter((todo)=>{return !clicked.completed})
    }
});

myApp.use(store)
myApp.use(router)
.use(Vuex)
.use(Sortable)



myApp.use(VueRouter).mount('#app')
