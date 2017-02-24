import Vue from 'vue';
import Router from 'vue-router';
import index from '../view/index/index.vue';
// import Login from '../view/Login/Login.vue';
import activity from '../view/activity/activity.vue';
import jc from '../view/jc/jc.vue';
import more from '../view/more/more.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        {
            path: '/activity',
            name: 'activity',
            component: activity
        },
        {
            path: '/jc/:gameNo',
            name: 'jc',
            component: jc
        },
        {
            path: '/more',
            name: 'more',
            component: more
        }
    ]
});
