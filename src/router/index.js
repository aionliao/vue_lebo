import Vue from 'vue';
import Router from 'vue-router';
import index from '../view/index/index.vue';
import login from '../view/login/login.vue';
import activity from '../view/activity/activity.vue';
import jc from '../view/jc/jc.vue';
import more from '../view/more/more.vue';
import info from '../view/info/info.vue';
import sign from '../view/sign/sign.vue';
import kj from '../view/kj/kj.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
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
        },
        {
            path: '/info',
            name: 'info',
            component: info
        },
        {
            path: '/user/sign',
            name: 'sign',
            component: sign
        },
        {
            path: '/kj',
            name: 'kj',
            component: kj
        }
    ]
});
