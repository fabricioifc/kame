import VueRouter from 'vue-router'
import Vue from 'vue'
import HomePage from "../pages/HomePage.vue"
import ReferenciasPage from "../pages/ReferenciasPage.vue"
Vue.use(VueRouter)

const rotas = [
    {path:"/", name:"home", component:HomePage},
    {path:"/referencias", name:"referencias", component:ReferenciasPage},
]

export const router = new VueRouter({
    mode:"history",
    routes:rotas,
})