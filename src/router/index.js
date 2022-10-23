import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Experiences from '../pages/Experiences.vue'
import Movie from '../pages/Movie.vue'
import Projects from '../pages/Projects.vue'
import Kpop from '../pages/Kpop.vue'

const routes = [{
    path: "/",
    redirect: "/home",
    name: "Index"
}
    ,{
    path: "/Home",
    component: Home,
    name: "Home",
},{
    path: "/Experiences",
    component: Experiences,
    name: "Experiences",
},{
    path: "/Kpop",
    component: Kpop,
    name: "Kpop",
},{
    path: "/Movie",
    component: Movie,
    name: "Movie",
},{
    path: "/Projects",
    component: Projects,
    name: "Projects",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass:"active",
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) {
            return{
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return{ x: 0, y: 0};
    },
    routes,
});

export default router;