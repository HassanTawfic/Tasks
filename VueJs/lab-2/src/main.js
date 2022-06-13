import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import allStudents from "@/components/allStudents";
import addStudent from "@/components/addStudent";
import studentDetails from "@/components/StudentDetails";

const routes = [
    {
        path:'/',
        component:allStudents
    },
    {
        path:'/addStudent',
        component:addStudent
    },
    {
        path:'/students/:id',
        component: studentDetails
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
