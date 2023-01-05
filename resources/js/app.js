require('./bootstrap');

import { createApp } from 'vue'
import * as vueRouter from "vue-router";
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskEditComponent from "./components/TaskEditComponent";

const routes = [
    {
        path: '/tasks',
        name: 'task.list',
        component: TaskListComponent
    },
    {
        path: '/tasks/:taskId',
        name: 'task.show',
        component: TaskShowComponent,
        props: true
    },
    {
        path: '/tasks/create',
        name: 'task.create',
        component: TaskCreateComponent
    },
    {
        path: '/tasks/:taskId/edit',
        name: 'task.edit',
        component: TaskEditComponent,
        props: true
    },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

createApp({
    components:{
        HeaderComponent,
    }
}).use(router).mount('#app')

