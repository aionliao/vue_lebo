import Vue from 'vue';
import Router from 'vue-router';
import index from '../view/index/index.vue';
import login from '../view/user/login.vue';
import register from '../view/user/register.vue';
import forget from '../view/user/forget.vue';
import activity from '../view/activity/activity.vue';
import jc from '../view/jc/jc.vue';
import more from '../view/more/more.vue';
import info from '../view/info/info.vue';
import sign from '../view/sign/sign.vue';
import kjList from '../view/kj/kjList.vue';
import kjDetail from '../view/kj/kjDetail.vue';
import redIndex from '../view/red/redIndex.vue';
import bfIndex from '../view/bf/bfIndex.vue';
import trendIndex from '../view/trend/trendIndex.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/user/login',
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
            path: '/user/register',
            name: 'register',
            component: register
        },
        {
            path: '/user/forget',
            name: 'forget',
            component: forget
        },
        {
            path: '/kj',
            name: 'kjList',
            component: kjList
        },
        {
            path: '/kjDetail/:gameNo/issueNo/:issueNo',
            component: kjDetail
        },
        {
            path: '/red',
            component: redIndex
        },
        {
            path: '/bf',
            component: bfIndex
        },
        {
            path: '/trend',
            component: trendIndex
        }
    ]
});
