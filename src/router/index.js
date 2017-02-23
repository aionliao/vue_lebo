import Vue from 'vue';
import Router from 'vue-router';
import Index from '../view/Index/Index.vue';
// import Login from '../view/Login/Login.vue';
import Activity from '../view/Activity/Activity.vue';
import JC from '../view/JC/JC.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity
        },
        {
            path: '/jc/:gameNo',
            name: 'JC',
            component: JC
        }
    ]
});
