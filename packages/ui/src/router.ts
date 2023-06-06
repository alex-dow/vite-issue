import { RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const MainLayout = () => import('@/Layout.vue');

const HomePage = () => import('@/Home.vue');

const routes: RouteRecordRaw[] = [{
    path: '/',
    component: MainLayout,
    children: [{
        path: '',
        name: 'home',
        component: HomePage
    }]
}];


const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;